import dotenv from 'dotenv';

dotenv.config();

interface ISettings {
    KEY: string;
    PORT: number;
    DB_URL: string;
    DB_NAME: string;
}

export const ENV: ISettings = {
  KEY: process.env.KEY as string,
  PORT: Number(process.env.PORT),
  DB_NAME: process.env.DB_URL as string,
  DB_URL: process.env.DB_NAME as string,
};
