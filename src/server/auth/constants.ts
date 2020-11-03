import { StrategyOptions } from 'passport-jwt';
import { cookieExtractor } from './utils';
import { ENV } from '../config';

export const strategyOptions: StrategyOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: ENV.KEY_JWT,
  // issuer: 'accounts.examplesoft.com',
  // audience: 'yoursite.net',
  algorithms: ['HS256'],
};
