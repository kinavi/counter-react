import { Request, Response } from 'express';
import { IApiResponse } from '../../../types';
import * as ActionsCreator from '../../../client/redux/actions/ActionsCreator';
import { IModels } from '../../mongoose/types';

export const createTask = (models: IModels) => async (req: Request, res: Response) => {
  const { userId, nameTask } = req.body;

  const task = new models.task({
    userId,
    label: nameTask,
    timeTotal: 0,
    tracks: [],
  });
  task.save();

  const result: IApiResponse = {
    status: 'action',
    result: ActionsCreator.addTask({
      id: task.id,
      tracks: [],
      timeTotal: '0',
      label: nameTask,
      isReadonly: true,
      snapshot: nameTask,
    }),
  };

  return res.status(200).send(result);
};
