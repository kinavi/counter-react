import passport from 'passport';
import {
  Strategy,
} from 'passport-jwt';
import { Model } from 'mongoose';
import { strategyOptions } from './constants';

export class Auth {
  private _strategy: passport.Strategy | null;

  public Passport: passport.PassportStatic | null;

  constructor() {
    this._strategy = null;
    this.Passport = null;
  }

  public get Authenticate() {
    if (!this.Passport) {
      throw new Error('Auth.Passport is null');
    }

    return this.Passport.authenticate(
      'jwt',
      {
        session: false,
        failureRedirect: '/auth',
      },
    );
  }

  public InitialPassport = (userModel: Model<any>) => {
    this._strategy = new Strategy(
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
    this.Passport = passport.use(this._strategy);
  }
}
