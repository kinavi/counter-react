import { IErrors, IFieldsForm } from '../types';
import { IValidateResult } from './types';

const validateEmail = (email: string): string => {
  if (!email) {
    return 'Почта не указана';
  }
  return '';
};

const validateName = (name: string): string => {
  if (!name) {
    return 'Имя не указана';
  }
  return '';
};

const validatePassword = (password: string): string => {
  if (!password) {
    return 'Введите пароль';
  }

  return '';
};

const validateRepeatPassword = (repeatPassword: string | undefined): string => {
  if (!repeatPassword) {
    return 'Повторите пароль';
  }

  return '';
};

export const validateForm = (fields: IFieldsForm | null): IValidateResult => {
  if (fields) {
    const errors: IErrors = {
      email: validateEmail(fields.email),
      login: validateName(fields.login as string),
      password: validatePassword(fields.password),
      repeatPassword: validateRepeatPassword(fields.repeatPassword),
    };
    return {
      isValidate: errors.login === ''
        || errors.email === ''
        || errors.password === ''
        || errors.repeatPassword === '',
      errors,
    };
  }
  return ({
    isValidate: false,
    errors: {
      password: 'Поле не заполнено',
      login: 'Поле не заполнено',
      email: 'Поле не заполнено',
      repeatPassword: 'Поле не заполнено',
    },
  });
};
