import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from '../../component/Forms/Register';
import { LoginForm } from '../../component/Forms/Login';
import * as ActionsCreator from '../../redux/actions/ActionsCreator';
import * as ThunkActions from '../../redux/actions/ThunkActions';
import {
  IErrors, IFieldsForm, IState,
} from '../../redux/types';

interface IAuthentionPageStateProps {
  errors: IErrors;
  fields: IFieldsForm;
}

type AuthentionPagePropsType = {

} & typeof ActionsCreator & IAuthentionPageStateProps & typeof ThunkActions

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

const mapStateToProps = (state: IState): IAuthentionPageStateProps => ({
  errors: state.form.error,
  fields: state.form.fields,
});

export const AuthentionPageWithState = connect(mapStateToProps, { ...ActionsCreator, ...ThunkActions })(AuthentionPage);
