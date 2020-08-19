import { createContext } from 'react';
import { ITimerContext } from './component/types';

const TimerContext = createContext<ITimerContext>({ value: 0 });

export default TimerContext;
