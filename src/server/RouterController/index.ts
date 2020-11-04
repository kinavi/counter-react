import { Request, Response, Router } from 'express';
import { IModels } from '../mongoose/types';
import { ViewController } from '../ViewController';
import { Store } from '../../client/redux/store';
import { setUserId } from '../../client/redux/action';
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
      const { renderMainPage } = new ViewController();

      this.router.get('/', authenticate, (req: Request, res: Response) => {
        res.send(renderMainPage(Store, req.url));
        // contine...
      });

      this.router.get('/auth', (req: Request, res: Response) => {
        res.send(renderMainPage(Store, req.url));
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
              .send('done');
          }
          return res
            .status(401)
            .send('no valid');
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

      this.router.get('/api/initial', authenticate, (req: Request, res: Response) => {
        console.log('Hello', req.user);
        if (req.user) {
          return res.status(200).send(setUserId(req.user._id));
        }
        res.redirect('/auth');
      });
      // contine routs...
    }
}
