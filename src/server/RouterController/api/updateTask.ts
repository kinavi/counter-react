import { Request, Response } from 'express';
import { IApiResponse } from '../../../types';
import * as ActionsCreator from '../../../client/redux/actions/ActionsCreator';
import { IModels } from '../../mongoose/types';

export const updateTask = (models: IModels) => async (req: Request, res: Response) => {
  console.log('req', req.body);
  const task = req.body;
  const { n, nModified, ok } = await models.task.updateOne(
    { _id: task.id },
    { label: task.label },
  );

  if (ok && nModified && n) {
    const result: IApiResponse = {
      status: 'ok',
      result: ActionsCreator.updateTask({
        ...task,
        snapshot: task.label,
        isReadonly: true,
      }),
    };
    res.status(200).send(result);
  } else {
    const result: IApiResponse = {
      status: 'error',
      // result: ActionsCreator.updateTask(task),
      message: 'task not update',
    };
    res.status(200).send(result);
  }
};
