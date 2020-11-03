import React, { useState } from 'react';
import classnames from 'classnames';
import { Field } from '../../UI/Field';
import { Button } from '../../UI/Button';
import { Icons } from '../../UI/Icons';
import { RegisterFormType } from '../types';

export const RegisterForm = (props: RegisterFormType) => {
  const {
    onRegister, title, mix, errors, fields, updateFields, onSwitch,
  } = props;

  const {
    email, login = '', password, repeatPassword = '',
  } = fields;

  const handleRegister = () => {
    onRegister({
      email, login, password,
    });
  };

  return (
    <div className={classnames('register-form', mix)}>
      {title && <h1 className="register-form__title">{title}</h1>}
      <Field
        Icon={Icons.mail}
        value={email}
        onChange={(value) => updateFields({ ...fields, email: value })}
        mix="register-form__field"
        placeholder="email"
        hasError={errors ? errors.email : ''}
      />
      <Field
        Icon={Icons.profile}
        value={login}
        onChange={(value) => updateFields({ ...fields, login: value })}
        mix="register-form__field"
        placeholder="name"
        hasError={errors ? errors.login : ''}
      />
      <Field
        Icon={Icons.password}
        value={password}
        onChange={(value) => updateFields({ ...fields, password: value })}
        mix="register-form__field"
        placeholder="password"
        hasError={errors ? errors.password : ''}
      />
      <Field
        Icon={Icons.password}
        value={repeatPassword}
        onChange={(value) => updateFields({ ...fields, repeatPassword: value })}
        mix="register-form__field"
        placeholder="password"
        hasError={errors ? errors.password : ''}
      />
      <Button
        onClick={handleRegister}
        mix="register-form__button"
      >
        Register
      </Button>
      <Button
        onClick={onSwitch}
        mix="register-form__button register-form__button_switch show-form"
      >
        Switch
      </Button>
    </div>
  );
};
