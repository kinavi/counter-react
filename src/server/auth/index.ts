import passport from 'passport';
// import { Strategy } from 'passport-local';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { sign } from 'jsonwebtoken';
import { TimerMongoose } from '../mongoose';
import { MODELS } from '../mongoose/constants';

const cookieExtractor = function (req) {
  console.log('cookieExtractor ->', req.cookies);
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.jwt;
  }
  return token;
};

const opts: StrategyOptions = {
  jwtFromRequest: cookieExtractor, // ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'misha',
  // issuer: 'accounts.examplesoft.com',
  // audience: 'yoursite.net',
  algorithms: ['HS256'],
};

export class Auth {
  private strategy: passport.Strategy;

  public Passport: passport.PassportStatic;

  constructor(db: TimerMongoose) {
    this.strategy = new Strategy(
      opts,
      (jwtPayload, done) => {
        console.log('jwtPayload', jwtPayload);
        const { login, password = 'test' } = jwtPayload;

        const User = db.Queries.models[MODELS.user];
        User.findOne({ login }, (err, user) => {
          if (err) {
            return done(err, false);
          }
          if (!user || !user.validatePassword(password)) {
            console.log('email or password: is invalid');
            return done(null, false, {
              message: { 'email or password': 'is invalid' },
            });
          }
          console.log('Good');
          return done(null, user);
        });
      },
    );
    this.Passport = passport.use(this.strategy);
  }
}
