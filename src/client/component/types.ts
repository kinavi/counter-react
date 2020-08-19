export interface ITimer {
    id: number;
    label: string;
    value: number;
    // dateStart: string;
    // dateStop: string;
}

export type TrackPropsType = ITimer

export interface ITimerContext {
    value: number;
}
