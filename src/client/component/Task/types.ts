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
} & ITask

export type WithModePropsType = {
    isReadonly: boolean;
    onSave(): void;
    onPlay(): void;
    onChange: typeof updateTask;
    onRemove(): void;
} & ITask

export type ComponentType = {
    view: (props: ViewModePropsType) => JSX.Element;
    edit: (props: EditModePropsType) => JSX.Element;
}

export type WithTracksPropsType = {
    tracks: ITrack[];
    mix: string;
} & WithModePropsType
