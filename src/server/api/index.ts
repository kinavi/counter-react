import {
  Router, Request, Response, json,
} from 'express';

const router = Router();
const jsonParser = json();

interface IRoud {
    idTrack: number;
    dateStart: Date;
    dateStop: Date;
}

interface IResult {
    idTrack: number;
    label: string;
    value: number;
    isStart: boolean;
    rouds: IRoud[];
}

router.get('/initial', jsonParser, async (req: Request, res: Response) => {
  // Сначала получаем весь список треков
  const result: IResult[] = [{
    idTrack: 1239492834524,
    label: 'Test',
    isStart: false,
    value: 1500,
    rouds: [{
      idTrack: 1239492834524,
      dateStart: new Date(),
      dateStop: new Date(),
    }],
  }];

  res.status(200).send(result);
});

export default router;
