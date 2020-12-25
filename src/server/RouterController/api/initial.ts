import { Request, Response } from 'express';
import { ITask } from '../../../client/redux/types';
import { IApiResponse } from '../../../types';
import * as ActionsCreator from '../../../client/redux/actions/ActionsCreator';
import { IModels } from '../../mongoose/types';

export const initial = (models: IModels) => async (req: Request, res: Response) => {
  if (req.user) {
    const userId: string = req.user.id;
    const tasksDB = await models.task.find({ userId });
    const tasks: ITask[] = await Promise.all(
      tasksDB.map(async (task) => ({
        id: task.id,
        label: task.label,
        timeTotal: task.timeTotal,
        tracks: await models.track.find({ taskId: task.id }),
      })),
    );
    const result: IApiResponse = {
      status: 'actionsList',
      result: [
        ActionsCreator.setUserId(userId),
        ActionsCreator.setTasks(tasks),
        ActionsCreator.updateAppStatus('ready'),
      ],
    };
    return res.status(200).send(result);
  }
  res.redirect('/auth');
};
