import { Query } from 'mongoose';
import { IModels } from '../types';
import { MODELS } from '../constants';

export class Queries {
    models: IModels;

    constructor(models: IModels) {
      this.models = models;
    }

    public getTracks(handleCallback?: (error, result) => void): any {
      return this.models[MODELS.track].find({});
    }

    public getTrackById = (id) => this.models[MODELS.track].findById(id)

    public getRouds = () => this.models[MODELS.road].find({})

    public getRoudsById = (id) => this.models[MODELS.road].find({ id })

    public addRouds = (trackId) => this.models[MODELS.road].insertMany([
      { trackId, dateStart: new Date(), dateStop: new Date() },
    ])

    public addTrack = (userId) => this.models[MODELS.track].insertMany([
      { label: 'React', isStart: false, userId },
    ])

    // public addUser = () => {
    //   const test = new this.models[Models.user]({ name: 'vova1' });
    //   test.save();
    //   console.log('test', test);
    //   return test;
    // }

    public isLoginBusy = (login: string, token) => this.models[MODELS.user].findOne({ login }, (err, user) => {
      token = user.generateJWT();
    })
    // this.models[Models.user].insertMany([
    //   { name: 'vova' },
    // ])

    public findUserByName = (name: string) => this.models[MODELS.user].findOne({ name })
}
