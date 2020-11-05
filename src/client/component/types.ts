import { ITrack } from '../redux/types';

export type TrackPropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
} & ITrack

export interface ITimerContext {
    value: number;
}
