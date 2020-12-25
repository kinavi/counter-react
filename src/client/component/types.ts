import { ITrack } from '../redux/types';

export type TrackPropsType = {
    onStop(): void;
    limit: number;
} & ITrack

export interface ITimerContext {
    value: number;
}
