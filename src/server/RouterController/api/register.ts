import { Request, Response } from 'express';
import { IModels } from '../../mongoose/types';

// TODO: fix endpoints
export const register = (models: IModels) => (req: Request, res: Response) => {
  const {
    email, login, password,
  } = req.body;
  models.user.findOne({ email }, (err, user) => {
    if (user) {
      return res.send('login is busy');
    }
    const newUser = new models.user({ email, login });
    newUser.setPassword(password);
    newUser.save();
    res
      .cookie('jwt', user.generateJWT(password))
      .status(200)
      .send('done');
  });
};
