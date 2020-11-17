import { Request, Response, Router } from 'express';
import moment from 'moment';
import { IModels } from '../mongoose/types';
import { ViewController } from '../ViewController';
import { Store } from '../../client/redux/store';
import * as ActionsCreator from '../../client/redux/actions/ActionsCreator';
import { IApiResponse } from '../../types';
import { TaskConvertor } from './utils';
import { ITask } from '../../client/redux/types';
// Как-то надо обновлять стор
// Где-то надо хранить стор
// Как-то надо отрисовывать
export class RouterController {
    private router: Router;

    public get Router() {
      return this.router;
    }

    // TODO: Type!
    constructor(authenticate: any, models: IModels) {
      this.router = Router();
      const { renderMainPage, renderAuthForm } = new ViewController();

      this.router.get('/', authenticate, (req: Request, res: Response) => {
        res.send(renderMainPage(Store, req.url));
        // contine...
      });

      this.router.get('/auth', (req: Request, res: Response) => {
        res.send(renderAuthForm(Store, req.url));
      });

      this.router.post('/api/login', (req: Request, res: Response) => {
        const {
          email, password,
        } = req.body;
        models.user.findOne({ email }, (err, user) => {
          if (user && user?.validatePassword(password)) {
            return res
              .cookie('jwt', user.generateJWT(password))
              .status(200)
              .send({ status: 'ok' } as IApiResponse);
          }
          return res
            .status(401)
            .send({ status: 'error', message: 'no valid' } as IApiResponse);
        });
      });

      // TODO: fix endpoints
      this.router.post('/api/register', (req: Request, res: Response) => {
        const {
          email, login, password,
        } = req.body;
        models.user.findOne({ email }, (err, user) => {
          if (user) {
            return res.send('login is busy');
          }
          const newUser = new models.user({ email, login });
          newUser.setPassword(password);
          newUser.save();
          res
            .cookie('jwt', user.generateJWT(password))
            .status(200)
            .send('done');
        });
      });

      this.router.get('/api/initial', authenticate, async (req: Request, res: Response) => {
        if (req.user) {
          const userId = req.user._id;
          const tasksDB = await models.task.find({ userId });
          const tasks: ITask[] = await Promise.all(
            tasksDB.map(async (task) => ({
              id: task._id,
              label: task.label,
              timeTotal: task.timeTotal,
              tracks: await models.track.find({ taskId: task._id }),
            })),
          );
          const result: IApiResponse = {
            status: 'actionsList',
            result: [ActionsCreator.setUserId(userId), ActionsCreator.setTasks(tasks)],
          };
          return res.status(200).send(result);
        }
        res.redirect('/auth');
      });

      this.router.post('/api/createTask', authenticate, async (req: Request, res: Response) => {
        const { userId, nameTask } = req.body;

        const task = new models.task({
          userId,
          label: nameTask,
          timeTotal: 0,
          tracks: [],
        });
        task.save();

        const result: IApiResponse = {
          status: 'action',
          result: ActionsCreator.addTask({
            id: task._id,
            tracks: [],
            timeTotal: '0',
            label: nameTask,
          }),
        };

        return res.status(200).send(result);
      });

      this.router.post('/api/updateTask', authenticate, async (req: Request, res: Response) => {
        console.log('req', req.body);
        const task = req.body;
        const { n, nModified, ok } = await models.task.updateOne(
          { _id: task.id },
          { label: task.label },
        );

        if (ok && nModified && n) {
          const result: IApiResponse = {
            status: 'ok',
            result: ActionsCreator.updateTask({
              ...task,
              snapshot: task.label,
              isReadonly: true,
            }),
          };
          res.status(200).send(result);
        } else {
          const result: IApiResponse = {
            status: 'error',
            // result: ActionsCreator.updateTask(task),
            message: 'task not update',
          };
          res.status(200).send(result);
        }
      });

      this.router.delete('/api/removeTask', authenticate, async (req: Request, res: Response) => {
        const { taskId } = req.body;
        const { n, deletedCount, ok } = await models.task.deleteOne({ _id: taskId });

        if (ok && deletedCount && n) {
          const result: IApiResponse = {
            status: 'ok',
            result: ActionsCreator.removeTask(taskId),
          };
          res.status(200).send(result);
        }
      });

      this.router.post('/api/startTrack', authenticate, async (req: Request, res: Response) => {
        console.log('req', req.body);
        const { taskId } = req.body;

        // TODO: Тут потенцильная угроза. Надо сделать проверку на запущенный трек
        // TODO: Сделать чтобы только одна задача запускалась за раз
        const hasStartTrack = await models.track.findOne({ taskId, dateStop: null });

        if (hasStartTrack) {
          const result: IApiResponse = {
            status: 'error',
            message: 'Есть активные треки',
          };
          return res.status(200).send(result);
        }
        const track = new models.track({
          dateStart: moment(),
          dateStop: null,
          taskId,
        });
        track.save();

        const result: IApiResponse = {
          status: 'ok',
          result: ActionsCreator.startTrack({
            id: track._id,
            dateStart: track.dateStart,
            dateStop: track.dateStop,
            taskId: track.taskId,
          }),
        };

        res.status(200).send(result);
      });
      // contine routs...
    }
}
