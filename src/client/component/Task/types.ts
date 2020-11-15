import { ITask } from '../../redux/types';
import { submitRemoveTask } from '../../redux/actions/ThunkActions';

export type EditModePropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onChange(task: ITask): void;
    onSave(): void;
    onRemove(): void;
    mix?: string;
} & ITask

export type ViewModePropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onChange(task: ITask): void;
    onPlay(): void;
    mix?: string;
} & ITask

export type CreateModePropsType = {
    // onSave(): void;
    onCreate(value: string): void;
    mix?: string;
    onCancel(): void;
    // onChange(): void;
}
