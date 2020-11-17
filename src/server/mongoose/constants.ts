import { SchemaOptions, SchemaDefinition, ConnectionOptions } from 'mongoose';

export const COMMON_OPTIONS: SchemaOptions = {
  versionKey: false,
};

export const TRACK: SchemaDefinition = {
  dateStart: Date,
  dateStop: Date,
  taskId: String,
};

export const USER: SchemaDefinition = {
  login: String,
  email: String,
  hash: String,
  salt: String,
  name: String,
};

export const TASK: SchemaDefinition = {
  userId: String,
  label: String,
  timeTotal: String,
  tracks: [TRACK],
};

export enum MODELS {
  user = 'user',
  task = 'task',
  track = 'track',
}

export const getConnectOptions = (dbName: string): ConnectionOptions => ({
  dbName,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
});
