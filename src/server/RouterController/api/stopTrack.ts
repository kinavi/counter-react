import { Request, Response } from 'express';
import moment from 'moment';
import { IApiResponse } from '../../../types';
import * as ActionsCreator from '../../../client/redux/actions/ActionsCreator';
import { IModels } from '../../mongoose/types';

export const stopTrack = (models: IModels) => async (req: Request, res: Response) => {
  const { trackId } = req.body;
  const { n, nModified, ok } = await models.track.updateOne(
    { _id: trackId },
    { dateStop: moment() },
  );
  if (n && nModified && ok) {
    const track = await models.track.findById(trackId);
    const result: IApiResponse = {
      status: 'action',
      result: ActionsCreator.stopTrack(trackId, {
        id: track.id,
        dateStart: track.dateStart,
        dateStop: track.dateStop,
        taskId: track.taskId,
      }),
    };

    return res.status(200).send(result);
  }

  const result: IApiResponse = {
    status: 'error',
    message: 'Ошибка остановки',
  };

  return res.status(200).send(result);
};
