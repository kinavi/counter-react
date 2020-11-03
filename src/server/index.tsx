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

  public run = (): void => {
    this.runMongoose();
  }
}

const server = new Server(ENV.PORT, path.resolve('./dist/public'));

server.run();
