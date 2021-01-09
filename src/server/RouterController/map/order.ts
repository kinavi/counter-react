import { Request, Response } from 'express';
import { Views } from '../../ViewController';
import { Store } from '../../../client/redux/store';

export const order = (req: Request, res: Response) => {
  res.send(Views.renderOrderPage(Store, req.url));
};
