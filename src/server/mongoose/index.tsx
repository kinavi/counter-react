import {
  model, connect,
} from 'mongoose';
import { UserSchema } from './Schems/user';
import { TaskSchema } from './Schems/task';
import {
  USER,
  MODELS,
  TASK,
  TRACK,
  getConnectOptions,
} from './constants';
import { IModels } from './types';

type StatusDB = 'ok' | 'error' | 'initial'

export class TimerMongoose {
  private _url: string;

  private _models: IModels | null;

  get Models() {
    return this._models;
  }

  private _dbName: string;

  public Status: StatusDB;

  constructor(url: string, dbName: string) {
    this._url = url;
    this._dbName = dbName;
    this.Status = 'initial';
    this._models = null;
  }

  private handleError = (error: string): void => {
    console.log('error', error);
  }

  private setModels = () => {
    this._models = {
      user: model(MODELS.user, new UserSchema(USER).Schema),
      task: model(MODELS.task, new TaskSchema(TASK).Schema),
      track: model(MODELS.track, new TaskSchema(TRACK).Schema),
    };
  }

  // message: string, onConnect: () => void
  public SetConnect = async (): Promise<void> => connect(this._url, getConnectOptions(this._dbName))
    .then(() => {
      // console.log(message);
      this.setModels();
      this.Status = 'ok';
      // onConnect();
    })
    .catch((error) => {
      this.Status = 'error';
      this.handleError(error);
    })
}
