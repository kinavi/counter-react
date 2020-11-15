import React, { useEffect, useState } from 'react';
import {
  WithModePropsType,
  ComponentType,
} from './types';
import { Icons } from '../../UI/Icons';
import { ITask } from '../../../redux/types';

export const WithMode = (Component: ComponentType) => (props: WithModePropsType) => {
  const {
    onSave, onPlay, mix, isCreateMode, onCreate, isReadonly, onRemove, ...propsComponent
  } = props;
  const [hasState, switchMode] = useState(isReadonly);

  useEffect(() => switchMode(isReadonly), [isReadonly]);

  if (isCreateMode) {
    return (
      <Component.create // eslint-disable-line
        onCreate={onCreate}
      />
    );
  }

  return hasState
    ? (
      <Component.view // eslint-disable-line
        mix={mix}
        {...propsComponent}
        leftIcon={Icons.note}
        rightIcon={Icons.play}
        onPlay={onPlay}
      />
    )
    : (
      <Component.edit // eslint-disable-line
        {...propsComponent}
        mix={mix}
        leftIcon={Icons.cross}
        rightIcon={Icons.check}
        onSave={onSave}
        onRemove={onRemove}
      />
    );
};
