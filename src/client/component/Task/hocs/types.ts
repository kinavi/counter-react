import { CreateModePropsType, EditModePropsType, ViewModePropsType } from '../types';
import { updateTask, addTask } from '../../../redux/actions/ActionsCreator';
import { submitRemoveTask } from '../../../redux/actions/ThunkActions';
import { ITask } from '../../../redux/types';

export type WithModePropsType = {
    isCreateMode?: boolean;
    onSave(): void;
    onPlay(): void;
    onChange: typeof updateTask;
    onCreate: typeof addTask;
    onRemove(): void;
    isReadonly?: boolean
    mix?: string;
} & ITask

export type ComponentType = {
    view: (props: ViewModePropsType) => JSX.Element;
    edit: (props: EditModePropsType) => JSX.Element;
    create: (props: CreateModePropsType) => JSX.Element;
}
