import React from 'react';
import { IconProps, WithSizePropsType } from '../types';
import { SIZE_ICON } from '../constants';

export const WithSize = (
  Component: (props: IconProps) => JSX.Element,
) => ({ fill, size }: WithSizePropsType) => (
  <Component {...SIZE_ICON[size || 'm']} fill={fill || 'black'} />
);
