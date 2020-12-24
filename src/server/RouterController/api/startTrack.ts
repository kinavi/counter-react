import { Request, Response } from 'express';
import moment from 'moment';
import { IApiResponse } from '../../../types';
import * as ActionsCreator from '../../../client/redux/actions/ActionsCreator';
import { IModels } from '../../mongoose/types';

export const startTrack = (models: IModels) => async (req: Request, res: Response) => {
  console.log('req', req.body);
  const { taskId } = req.body;

  // TODO: Тут потенцильная угроза. Надо сделать проверку на запущенный трек
  // TODO: Сделать чтобы только одна задача запускалась за раз
  const hasStartTrack = await models.track.findOne({ taskId, dateStop: null });

  if (hasStartTrack) {
    const result: IApiResponse = {
      status: 'error',
      message: 'Есть активные треки',
    };
    return res.status(200).send(result);
  }
  const track = new models.track({
    dateStart: moment(),
    dateStop: null,
    taskId,
  });
  track.save();

  const result: IApiResponse = {
    status: 'action',
    result: ActionsCreator.startTrack(taskId, {
      id: track.id,
      dateStart: track.dateStart,
      dateStop: track.dateStop,
      taskId: track.taskId,
    }),
  };

  res.status(200).send(result);
};
