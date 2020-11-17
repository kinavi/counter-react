import { ITrack } from '../redux/types';

export type TrackPropsType = {
    onStop(): void;
} & ITrack

export interface ITimerContext {
    value: number;
}
