import { Schema, model, connect } from 'mongoose';

const trackSchema = new Schema({
  label: String,
  isStart: Boolean,
});

const roadSchema = new Schema({
  idTrack: Number,
  dateStart: Date,
  dateStop: Date,
});

const Track = model('Track', trackSchema);
const Road = model('Road', roadSchema);

export { connect, Track, Road };
