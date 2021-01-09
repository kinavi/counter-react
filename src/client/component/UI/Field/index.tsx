import React from 'react';
import { Input } from '../Input';
import { FieldPropsType } from './types';
import './index.sass';

export const Field = (props: FieldPropsType): JSX.Element => {
  const {
    value,
    onChange,
    Icon,
    label,
    placeholder,
    mix,
    isRequired,
    dataId,
    hasError,
  } = props;

  return (
    <div className={`field ${mix}`}>
      { !label || (
      <div className="field__label">
        <label htmlFor={dataId}>
          {label}
        </label>
      </div>
      )}
      <div className="field__input">
        <Input
          isRequired={isRequired}
          value={value}
          onChange={onChange}
          Icon={Icon}
          placeholder={placeholder}
          hasError={hasError}
        />
      </div>
    </div>
  );
};
