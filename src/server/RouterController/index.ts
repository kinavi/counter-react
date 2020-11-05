import { Request, Response, Router } from 'express';
import { IModels } from '../mongoose/types';
import { ViewController } from '../ViewController';
import { Store } from '../../client/redux/store';
import { setUserId, setTasks } from '../../client/redux/action';
import { IApiResponse } from '../../types';
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
          const tasks = await models.task.find({ userId });
          console.log('tasks', tasks);
          const result: IApiResponse = {
            status: 'actionsList',
            result: [setUserId(userId), setTasks(tasks)],
          };
          return res.status(200).send(result);
        }
        res.redirect('/auth');
      });
      // contine routs...
    }
}
