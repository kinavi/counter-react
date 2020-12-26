import { Request, Response } from 'express';
import { Views } from '../../ViewController';
import { Store } from '../../../client/redux/store';

export const auth = (req: Request, res: Response) => {
  res.send(Views.renderAuthForm(Store, req.url));
};
