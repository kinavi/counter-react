import React from 'react';
import { connect } from 'react-redux';
import { ITrack } from '../types';
import { IState } from '../../redux/types';
import * as Actions from '../../redux/action/enum.actions';

type TaskPropsType = {

}

const Task = (props: TaskPropsType): JSX.Element => {
  const {

  } = props;
  return (
    <div className="task" />
  );
};

const mapStateToProps = (state: IState): IAuthentionPageStateProps => {
  console.log('state', state);
  return {
    errors: state.app.form.error,
    fields: state.app.form.fields,
  };
};

export const AuthentionPageWithState = connect(mapStateToProps, { ...Actions })(AuthentionPage);
