import React, { useState } from 'react';
import classnames from 'classnames';
import { LoginFormType } from '../types';
import { Field } from '../../UI/Field';
import { Icons } from '../../UI/Icons';
import { Button } from '../../UI/Button';

export const LoginForm = (props: LoginFormType): JSX.Element => {
  const {
    title, mix, fields, updateFields, onSwitch,
    onLogin,
  } = props;
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const {
    email, password, repeatPassword = '',
  } = fields;
  const handleLogin = () => {
    onLogin({ email, password });
  };

  return (
    <div className={classnames('login-form', mix)}>
      {title && <h1 className="login-form__title show-form">{title}</h1>}
      <Field
        value={email}
        onChange={(value) => updateFields({ ...fields, email: value })}
        placeholder="email"
        Icon={Icons.mail}
        mix="login-form__field show-form"
      />
      <Field
        value={password}
        onChange={(value) => updateFields({ ...fields, password: value })}
        placeholder="password"
        Icon={Icons.password}
        mix="login-form__field show-form"
      />
      <Button
        onClick={handleLogin}
        mix="login-form__button show-form"
      >
        Login
      </Button>
      <Button
        onClick={onSwitch}
        mix="login-form__button login-form__button_switch show-form"
      >
        Switch
      </Button>
    </div>
  );
};
