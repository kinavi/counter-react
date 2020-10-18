import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from '../../component/Forms/Register';
import { LoginForm } from '../../component/Forms/Login';
import * as Actions from '../../redux/action';
import {
  IAppState, IErrors, IFieldsForm, IState,
} from '../../redux/types';

interface IAuthentionPageStateProps {
  errors: IErrors;
  fields: IFieldsForm;
}

type AuthentionPagePropsType = {

} & typeof Actions & IAuthentionPageStateProps

// TODO: Валидация
const AuthentionPage = (props: AuthentionPagePropsType) => {
  const {
    register, fields, errors, updateFields, login,
  } = props;

  const commonPropsForm = {
    errors,
    fields,
    updateFields,
  };

  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
  // const onRegister = () => {
  //   register();
  // };
  return (
    <div className="authention-page">
      <div className="authention-page__title">
        {showRegisterForm ? 'Create Account' : 'Login'}
      </div>
      {showRegisterForm
        ? (
          <RegisterForm
            mix="authention-page__form"
            onRegister={register}
            {...commonPropsForm}
          />
        )
        : (
          <LoginForm
            mix="authention-page__form"
            onLogin={login}
            {...commonPropsForm}
          />
        )}
    </div>
  );
};

const mapStateToProps = (state: IState): IAuthentionPageStateProps => {
  console.log('state', state);
  return {
    errors: state.app.form.error,
    fields: state.app.form.fields,
  };
};

export const AuthentionPageWithState = connect(mapStateToProps, { ...Actions })(AuthentionPage);
