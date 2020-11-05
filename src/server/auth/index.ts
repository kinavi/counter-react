import passport from 'passport';
import {
  Strategy,
} from 'passport-jwt';
import { Model } from 'mongoose';
import { strategyOptions } from './constants';

export class Auth {
  private strategy: passport.Strategy;

  public Passport: passport.PassportStatic;

  public get Authenticate() {
    return this.Passport.authenticate(
      'jwt',
      {
        session: false,
        failureRedirect: '/auth',
      },
    );
  }

  constructor(userModel: Model<any>) {
    this.strategy = new Strategy(
      strategyOptions,
      (jwtPayload, done) => {
        const { login, password } = jwtPayload;
        userModel.findOne({ login }, (err, user) => {
          if (err) {
            return done(err, false);
          }
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              message: { 'email or password': 'is invalid' },
            });
          }
          return done(null, user);
        });
      },
    );
    this.Passport = passport.use(this.strategy);
  }
}
