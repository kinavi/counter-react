import { SchemaDefinition } from 'mongoose';

import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { SchemaFactory } from '.';

export class UserSchema extends SchemaFactory {
  constructor(definition: SchemaDefinition) {
    super(definition);

    this.Schema.methods.setPassword = function (password) {
      this.salt = crypto.randomBytes(16).toString('hex');
      this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };

    this.Schema.methods.validatePassword = function (password) {
      const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
      return this.hash === hash;
    };

    this.Schema.methods.generateJWT = function () {
      const today = new Date();
      const expirationDate = new Date(today);
      expirationDate.setDate(today.getDate() + 60);

      return jwt.sign({
        login: this.login,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
      }, 'misha');
    };

    this.Schema.methods.toAuthJSON = function () {
      return {
        id: this._id,
        login: this.login,
        token: this.generateJWT(),
      };
    };
  }

  // TODO: Надо разобраться с этой фигней
  // private getUser = function () {
  //   console.log('getTracks_inside', this);
  //   return this.find();
  // }
}
