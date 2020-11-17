import React from 'react';
import {
  WithModePropsType,
  ComponentType,
} from '../types';
import { Icons } from '../../UI/Icons';

export const WithMode = (Component: ComponentType) => (props: WithModePropsType) => {
  const {
    onSave, onPlay, isReadonly, onRemove, ...propsComponent
  } = props;

  return isReadonly
    ? (
      <Component.view // eslint-disable-line
        {...propsComponent}
        isReadonly={isReadonly}
        leftIcon={Icons.note}
        rightIcon={Icons.play}
        onPlay={onPlay}
      />
    )
    : (
      <Component.edit // eslint-disable-line
        {...propsComponent}
        isReadonly={isReadonly}
        leftIcon={Icons.cross}
        rightIcon={Icons.check}
        onSave={onSave}
        onRemove={onRemove}
      />
    );
};
