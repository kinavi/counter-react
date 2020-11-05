import React from 'react';
import { Input } from '../Input';

type FieldPropsType = {
  dataId?: string;
} & FieldType

export type FieldType = {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder: string;
    mix?: string;
    isRequired?: boolean;
    Icon: JSX.Element;
    hasError?: string;
}

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
