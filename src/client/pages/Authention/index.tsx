import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RegisterForm } from '../../component/Forms/Register';
import { LoginForm } from '../../component/Forms/Login';
import * as Actions from '../../redux/action';
import {
  IAppState, IErrors, IFieldsForm, IState,
} from '../../redux/types';
import { Button } from '../../component/UI/Button';

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
  const url = useLocation();
  console.log('url', url);
  const commonPropsForm = {
    errors,
    fields,
    updateFields,
  };

  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
  // const onRegister = () => {
  //   register();
  // };

  const handleSwitch = () => setShowRegisterForm(!showRegisterForm);

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
            onSwitch={handleSwitch}
            {...commonPropsForm}

          />
        )
        : (
          <LoginForm
            mix="authention-page__form"
            onLogin={login}
            onSwitch={handleSwitch}
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
