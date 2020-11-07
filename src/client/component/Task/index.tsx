import React from 'react';
import { connect } from 'react-redux';
import { IState, ITask } from '../../redux/types';
import * as Actions from '../../redux/action/enum.actions';
import { Button } from '../UI/Button';
import { WithMode } from './hocs/WithMode';
import { ViewMode } from './chunks/ViewMode';
import { EditMode } from './chunks/EditMode';
import {
  ViewModePropsType,
  EditModePropsType,
} from './types';

// interface ITaskStateProps {
//     tasks: ITask[];
// }

// type TaskPropsType = {
//
// } & ITask// ITaskStateProps
//
// export const Task = (props: TaskPropsType): JSX.Element => {
//
// };

export const Task = (
  WithMode<any, ViewModePropsType & EditModePropsType>({
    view: ViewMode,
    edit: EditMode,
  })
);
