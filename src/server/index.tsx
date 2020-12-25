import express, {
  Application,
} from 'express';
import cors from 'cors';
import path from 'path';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { TimerMongoose } from './mongoose';
import { Auth } from './auth';
import { ENV } from './config';
import { RouterController } from './RouterController';

// TODO: Как-то надо обновлять стор
// TODO: Где-то надо хранить стор
// TODO: Как-то надо отрисовывать

export class Server {
  private readonly _port: number;

  private readonly _pathStatic: string;

  private _app: Application;

  private _db: TimerMongoose;

  private readonly _auth: Auth;

  private readonly _routers: RouterController;

  constructor(port: number, pathToPublic: string) {
    this._port = port;
    this._app = express();
    this._pathStatic = pathToPublic;
    this._db = new TimerMongoose(ENV.DB_URL, ENV.DB_NAME);
    this._auth = new Auth();
    this._routers = new RouterController();
  }

  private runMongoose = async () => {
    await this._db.SetConnect();
    if (this._db.Status === 'ok' && this._db.Models) {
      this._auth.InitialPassport(this._db.Models.user);
      this._routers.InitialRouters(this._auth.Authenticate, this._db.Models);
      this.runServer();
    }
  }

  private runServer = (): void => {
    if (this._db.Status === 'ok' && this._routers) {
      const { Passport } = this._auth;
      const { Router } = this._routers;

      if (!Passport) {
        throw new Error('runServer -> Passport is null');
      }

      this._app.use(cors());
      this._app.use(bodyParser.json());
      this._app.use(cookieParser());
      this._app.use(Passport.initialize());
      this._app.use(Passport.session());
      this._app.use(express.static(this._pathStatic));
      this._app.use('/', Router);

      this._app.listen(
        this._port,
        () => console.log('Server is running - port: ', this._port),
      );
    }
  }

  public Run = (): void => {
    this.runMongoose()
      .catch((error) => {
        console.log('error', error);
      });
  }
}

const server = new Server(ENV.PORT, path.resolve('./dist/public'));

server.Run();
