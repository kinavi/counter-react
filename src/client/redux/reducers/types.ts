import { Action } from 'redux';
import { IFieldsForm, IErrors } from '../types';

export type IAppActions = {
    payload?: (IFieldsForm | IErrors);
} & Action
