import React, { useState } from 'react';
import {
  WithModePropsType,
  ComponentType,
} from './types';

export const WithMode = <C, P> (Component: C & ComponentType) => (props: P & WithModePropsType) => {
  // const { isReadonly } = props;
  const [isReadonly, setIsReadonly] = useState(true);

  return isReadonly
        ? <Component.view {...props} onLeftButtonClick={() => setIsReadonly(!isReadonly)}  />   // eslint-disable-line
        : <Component.edit {...props} onLeftButtonClick={() => setIsReadonly(!isReadonly)}/>;  // eslint-disable-line
};
