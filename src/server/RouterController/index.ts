import { Request, Response, Router } from 'express';
import moment from 'moment';
import { IModels } from '../mongoose/types';
import { VIEWS } from '../ViewController';
import { Store } from '../../client/redux/store';
import * as ActionsCreator from '../../client/redux/actions/ActionsCreator';
import { IApiResponse } from '../../types';
import {
  createTask, initial, login, register, removeTask, startTrack, stopTrack, updateTask,
} from './api';
// Как-то надо обновлять стор
// Где-то надо хранить стор
// Как-то надо отрисовывать
export class RouterController {
    private readonly _router: Router;

    public get Router() {
      return this._router;
    }

    // TODO: Type!
    constructor() {
      this._router = Router();
    }

    public InitialRouters = (authenticate: any, models: IModels) => {
      this._router.get('/', authenticate, (req: Request, res: Response) => {
        res.send(VIEWS.renderMainPage(Store, req.url));
        // contine...
      });

      this._router.get('/auth', (req: Request, res: Response) => {
        res.send(VIEWS.renderAuthForm(Store, req.url));
      });

      this._router.post('/api/login', login(models));
      this._router.post('/api/register', register(models));
      this._router.get('/api/initial', authenticate, initial(models));
      this._router.post('/api/createTask', authenticate, createTask(models));
      this._router.post('/api/updateTask', authenticate, updateTask(models));
      this._router.delete('/api/removeTask', authenticate, removeTask(models));
      this._router.post('/api/startTrack', authenticate, startTrack(models));
      this._router.post('/api/stopTrack', authenticate, stopTrack(models));
      // contine routs...
    }
}
