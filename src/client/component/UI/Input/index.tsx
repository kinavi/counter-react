import React, { useState } from 'react';
import classnames from 'classnames';
import { Icons } from '../Icons';

type InputPropsType = {
    value: string;
    onChange: (value: string) => void;
    mix?: string;
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
    Icon?: JSX.Element;
    dataId?: string;
    hasError?: string;
}

export const Input = (props: InputPropsType): JSX.Element => {
  const {
    Icon,
    value,
    dataId,
    isRequired,
    mix,
    onChange,
    placeholder,
    hasError,
  } = props;

  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = () => {
    setHasFocus(false);
  };

  const generateClassNameContainer = classnames(
    'form-input',
    mix,
    {
      'form-input_focus': hasFocus,
      'form-input_error': hasError,
    },
  );

  return (
    <div
      className={generateClassNameContainer}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="form-input__icon">
        { Icon }
      </div>
      <input
        value={value}
        onChange={handleChange}
        required={isRequired}
        type="text"
        id=""
        name={dataId}
        placeholder={placeholder}
      />
      <div className={classnames(
        'form-input__icon_error', {
          'form-input__icon_show': hasError,
        },
      )}
      >
        {Icons.warning}
      </div>
    </div>
  );
};
