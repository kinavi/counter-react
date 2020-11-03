import {
  model, connect,
} from 'mongoose';
import { UserSchema } from './Schems/user';
import {
  USER,
  MODELS,
  getConnectOptions,
} from './constants';
import { IModels } from './types';

export class TimerMongoose {
  private url: string;

  private models: IModels;

  get Models() {
    return this.models;
  }

  private dbName: string;

  public isReady: boolean;

  constructor(url: string, dbName: string) {
    this.url = url;
    this.dbName = dbName;
    this.isReady = false;
    this.models = {};
  }

  private handleError = (error: string): void => {
    console.log('error', error);
  }

  private setModels = () => {
    this.models[MODELS.user] = model(MODELS.user, new UserSchema(USER).Schema);
  }

  public setConnect = (message: string, onConnect: () => void): void => {
    connect(this.url, getConnectOptions(this.dbName))
      .then(() => {
        console.log(message);
        this.setModels();
        this.isReady = true;
        onConnect();
      })
      .catch((error) => {
        this.handleError(error);
      });
  }
}
