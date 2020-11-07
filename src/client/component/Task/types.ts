import { ITask } from '../../redux/types';

export type EditModePropsType = {
    // switchMode: () => void;
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
} & ITask

export type ViewModePropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
    // switchMode: () => void;
} & ITask
