import { ITask, ITrack } from '../../redux/types';
import { updateTask } from '../../redux/actions/ActionsCreator';

// export type TaskEditType = {
//     label: string
// }
//
// export type TaskViewType = {
//     label: string;
//     timeTotal: string;
// }

export type EditModePropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onChange(task: ITask): void;
    onSave(): void;
    onRemove(): void;
} & ITask

export type ViewModePropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onChange(task: ITask): void;
    onPlay(): void;
    onClick(): void ;
} & ITask

export type WithModePropsType = {
    isReadonly: boolean;
    onSave(): void;
    onRemove(): void;
} & ITask & ViewModePropsType

export type ComponentType = {
    View: (props: ViewModePropsType) => JSX.Element;
    Edit: (props: EditModePropsType) => JSX.Element;
}

export type WithTracksPropsType = {
    onStop(id: string): void;
    tracks: ITrack[];
    mix: string;
} & WithModePropsType
