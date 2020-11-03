import dotenv from 'dotenv';

dotenv.config();

export const ENV: ISettings = {
  KEY_JWT: process.env.KEY_JWT as string,
  PORT: Number(process.env.PORT),
  DB_NAME: process.env.DB_NAME as string,
  DB_URL: process.env.DB_URL as string,
};

interface ISettings {
    KEY_JWT: string;
    PORT: number;
    DB_URL: string;
    DB_NAME: string;
}
