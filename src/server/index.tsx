import express, {
  Router, Application,
} from 'express';
import cors from 'cors';
import path from 'path';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { TimerMongoose } from './mongoose';
import { Auth } from './auth';
import { ENV } from './config';
import { RouterController } from './RouterController';

export class Server {
  private port: number;

  private pathStatic: string;

  private app: Application;

  private db: TimerMongoose;

  constructor(port: number, pathToPublic: string) {
    this.port = port;
    this.app = express();
    this.pathStatic = pathToPublic;
    this.db = new TimerMongoose(ENV.DB_URL, ENV.DB_NAME);
  }

    private runMongoose = (): void => {
      this.db.setConnect(`DB connect is done.`, this.runServer);
    }

    private runServer = (): void => {
      if (this.db.isReady) {
        const {
          Passport,
          Authenticate,
        } = new Auth(this.db.Models.user);
        const {
          Router,
        } = new RouterController(Authenticate, this.db.Models);

        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(Passport.initialize());
        this.app.use(Passport.session());
        this.app.use(express.static(this.pathStatic));
        this.app.use('/', Router);

        this.app.listen(
          this.port,
          () => console.log('Server is running - port: ', this.port),
        );
      }
    }

    // private setRoutes = () => {
    //   this.apiRouter.get('/initial', async (req: Request, res: Response) => {
    //     // Сначала получаем весь список треков
    //     // this.db.Queries.getTracks((error, result) => {
    //     //   if (result) {
    //     //     res.status(200).send(result);
    //     //   }
    //     // });
    //     const result = {
    //       tracks: null,
    //       rouds: null,
    //     };
    //     result.tracks = await this.db.Queries.getTrackById('5f32ceb6d87daf636b7d15f4');
    //     result.rouds = await this.db.Queries.getRoudsById(result.track._id);
    //     res.send(result);
    //   });
    //
    //   this.apiRouter.get('/add', async (req: Request, res: Response) => {
    //     // Сначала получаем весь список треков
    //     // this.db.Queries.getTracks((error, result) => {
    //     //   if (result) {
    //     //     res.status(200).send(result);
    //     //   }
    //     // });
    //     // const result = {
    //     //   tracks: null,
    //     //   rouds: null,
    //     // };
    //
    //     // const tracks = await this.db.Queries.getTracks();
    //     const resultUser = await this.db.Queries.addUser();
    //     const resultTrack = await this.db.Queries.addTrack(resultUser[0]._id);
    //     const resultRoud = await this.db.Queries.addRouds(resultTrack[0]._id);
    //     // addRouds
    //     // res.send(result); vci-
    //   });
    //
    //   this.apiRouter.get('/get-token', async (req: Request, res: Response) => {
    //     const today = new Date();
    //     const expirationDate = new Date(today);
    //     expirationDate.setDate(today.getDate() + 60);
    //
    //     const token = jwt.sign({
    //       login: 'kinavi',
    //       id: 12345,
    //       exp: parseInt(expirationDate.getTime() / 1000, 10),
    //     }, 'misha');
    //     res.send(`token - ${token}`);
    //   });
    //
    //   // this.mapRouter.get('/register', async (req: Request, res: Response) => {
    //   //   res.send(this.renderRegisterForm());
    //   // });
    //
    //   this.apiRouter.post('/register', async (req: Request, res: Response) => {
    //     try {
    //       const {
    //         email, name, login, password,
    //       } = req.body;
    //
    //       const isLoginBuse = await this.db.Queries.isLoginBusy(login);
    //       if (isLoginBuse) {
    //         return res.send('isBuse');
    //       }
    //
    //       const user = await this.db.createUser(
    //         email,
    //         name,
    //         login,
    //         password,
    //       );
    //
    //       res.send(user);
    //     } catch (error) {
    //       res.send(error);
    //     }
    //   });
    //   // sign in
    //   this.apiRouter.post(
    //     '/login',
    //     async (req: Request, res: Response) => {
    //       const {
    //         email, password,
    //       } = req.body;
    //       console.log('cookies', req.cookies);
    //       console.log('login', email, password);
    //       res.send(`login -> ${email}, ${password}`);
    //     },
    //   );
    //
    //   this.apiRouter.get('/user', async (req: Request, res: Response) => {
    //     const user = await this.db.Queries.findUserByName('vova');
    //     res.send(user);
    //   });
    // }

    // private renderHTML = (url: string) => renderToString(
    //   <Html>
    //     <Provider store={Store}>
    //       <StaticRouter location={url}>
    //         <App />
    //       </StaticRouter>
    //     </Provider>
    //   </Html>,
    // );
    //
    // private renderRegisterForm = () => renderToString(
    //   <Html>
    //     <div className="form">
    //       <Field
    //         label="test"
    //         placeholder="ps"
    //       />
    //     </div>
    //   </Html>,
    // )

    public run = (): void => {
      this.runMongoose();
    }
}

const server = new Server(ENV.PORT, path.resolve('./dist/public'));

server.run();
