import { Router } from 'express';
import { IModels } from '../mongoose/types';
import {
  createTask,
  initial,
  login,
  register,
  removeTask,
  startTrack,
  stopTrack,
  updateTask,
} from './api';
import {
  auth,
  main,
} from './map';

export class RouterController {
    private readonly _router: Router;

    public get Router() {
      return this._router;
    }

    constructor() {
      this._router = Router();
    }

    public InitialRouters = (authenticate: any, models: IModels) => {
      // private
      this._router.get('/', authenticate, main);

      // public
      this._router.get('/auth', auth);

      // auth form
      this._router.post('/api/login', login(models));
      this._router.post('/api/register', register(models));

      // counter
      this._router.get('/api/initial', authenticate, initial(models));
      this._router.post('/api/createTask', authenticate, createTask(models));
      this._router.post('/api/updateTask', authenticate, updateTask(models));
      this._router.delete('/api/removeTask', authenticate, removeTask(models));
      this._router.post('/api/startTrack', authenticate, startTrack(models));
      this._router.post('/api/stopTrack', authenticate, stopTrack(models));
      // contine routs...
    }
}
