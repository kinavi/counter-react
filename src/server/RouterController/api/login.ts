import { Request, Response } from 'express';
import { IApiResponse } from '../../../types';
import { IModels } from '../../mongoose/types';

export const login = (models: IModels) => (req: Request, res: Response) => {
  const {
    email, password,
  } = req.body;
  models.user.findOne({ email }, (err, user) => {
    if (user && user?.validatePassword(password)) {
      return res
        .cookie('jwt', user.generateJWT(password))
        .status(200)
        .send({ status: 'ok' } as IApiResponse);
    }
    return res
      .status(401)
      .send({ status: 'error', message: 'no valid' } as IApiResponse);
  });
};
