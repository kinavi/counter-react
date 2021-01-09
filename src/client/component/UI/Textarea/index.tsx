import React from 'react';
import classnames from 'classnames';
import { TextareaPropsType } from './types';
import './index.sass';

export const Textarea = (props: TextareaPropsType): JSX.Element => {
  const {
    label, mix, placeholder,
  } = props;
  return (
    <div className={classnames('native-textarea', mix)}>
      {label && <label htmlFor="user_comment">{label}</label>}
      <textarea
        className="native-textarea__textarea"
        name="user_comment"
        placeholder={placeholder}
      />
    </div>
  );
};
