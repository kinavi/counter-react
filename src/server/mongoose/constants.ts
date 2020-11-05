import { SchemaOptions, SchemaDefinition, ConnectionOptions } from 'mongoose';

export const COMMON_OPTIONS: SchemaOptions = {
  versionKey: false,
};

// export const TRACK: SchemaDefinition = {
//   userId: String,
//   label: String,
//   isStart: Boolean,
// };

export const TRACK: SchemaDefinition = {
  dateStart: Date,
  dateStop: Date,
  trackId: String,
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
  track = 'track',
  // road = 'road',
  user = 'user',
  task = 'task',
}

export const getConnectOptions = (dbName: string): ConnectionOptions => ({
  dbName,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
});
