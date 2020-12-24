import { Request, Response } from 'express';
import { IApiResponse } from '../../../types';
import * as ActionsCreator from '../../../client/redux/actions/ActionsCreator';
import { IModels } from '../../mongoose/types';

export const removeTask = (models: IModels) => async (req: Request, res: Response) => {
  const { taskId } = req.body;
  const { n, deletedCount, ok } = await models.task.deleteOne({ _id: taskId });
  const queryResult = await models.track.remove({ taskId });
  console.log('queryResult', queryResult);
  // TODO: Надо уладять все треки таски
  if (ok && deletedCount && n) {
    const result: IApiResponse = {
      status: 'ok',
      result: ActionsCreator.removeTask(taskId),
    };
    res.status(200).send(result);
  }
};
