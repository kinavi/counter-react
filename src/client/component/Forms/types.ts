import { IErrors, IFieldsForm } from '../../redux/types';
import * as Actions from '../../redux/actions/index';

export interface IRegisterFieldsForm {
    email: string;
    login: string;
    password: string;
}

export interface ILoginFieldsForm {
    email: string;
    password: string;
}

export type LoginFormType = {
    fields: IFieldsForm;
    updateFields: typeof Actions.updateFields;
    onLogin: (fields: ILoginFieldsForm) => void;
    onSwitch: () => void;
} & FormPropsType;

export type RegisterFormType = {
    fields: IFieldsForm;
    errors: IErrors;
    onRegister: (fields: IRegisterFieldsForm) => void;
    updateFields: typeof Actions.updateFields;
    onSwitch: () => void;
} & FormPropsType;

export type FormPropsType = {
    title?: string;
    mix?: string;
    onCancel?: () => void;
}
