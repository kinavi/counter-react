import { SchemaOptions, SchemaDefinition } from 'mongoose';

export const COMMON_OPTIONS: SchemaOptions = {
  versionKey: false,
};

export const TRACK: SchemaDefinition = {
  userId: String,
  label: String,
  isStart: Boolean,
};

export const ROAD: SchemaDefinition = {
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
  // trackId: String,
};

export enum MODELS {
  track = 'Track',
  road = 'Road',
  user = 'User'
}
