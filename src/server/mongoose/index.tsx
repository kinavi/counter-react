import {
  model, connect,
} from 'mongoose';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { TrackSchema } from './Schems/track';
import { RoadSchema } from './Schems/road';
import { UserSchema } from './Schems/user';
import {
  TRACK, USER, ROAD, MODELS,
} from './constants';
import { Queries } from './Queries';
import { IUser, IModels } from './types';

interface ITimerMongoose {
  isReady: boolean;
  setConnect: (message: string, onConnect: () => void) => void;
}

export class TimerMongoose implements ITimerMongoose {
  private url: string;

  private queries: Queries;

  // TODO: написать set для queries
  public get Queries(): Queries { return this.queries; }

  private models: IModels = {};

  private dbName: string;

  public isReady: boolean;

  constructor(url: string, dbName: string) {
    this.url = url;
    this.dbName = dbName;
    this.isReady = false;
  }

  private handleError = (error: string): void => {
    console.log('error', error);
  }

  private setQueries = () => {
    this.models[MODELS.track] = model(MODELS.track, new TrackSchema(TRACK).Schema);
    this.models[MODELS.road] = model(MODELS.road, new RoadSchema(ROAD).Schema);
    this.models[MODELS.user] = model(MODELS.user, new UserSchema(USER).Schema);
    this.queries = new Queries(this.models);
  }

  public setConnect = (message: string, onConnect: () => void): void => {
    connect(this.url, {
      dbName: this.dbName,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      keepAlive: true,
      keepAliveInitialDelay: 300000,
    })
      .then(() => {
        console.log(message);
        this.setQueries();
        this.isReady = true;
        onConnect();
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  public createUser = async (email: string, name: string, login: string, password: string) => {
    const result: IUser = {
      email,
      name,
      login,
      salt: randomBytes(16).toString('hex'),
    };
    result.hash = pbkdf2Sync(password, result.salt, 10000, 512, 'sha512').toString('hex');
    return this.models[MODELS.user](result).save();
  };
}
