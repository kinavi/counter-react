import React, { useState } from 'react';
import { Field } from '../../../../component/UI/Field';
import { Icons } from '../../../../component/UI/Icons';
import { Button } from '../../../../component/UI/Button';
import { Textarea } from '../../../../component/UI/Textarea';
import './index.sass';

export const Form = (props) => {
  const {

  } = props;

  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenTextArea, setIsHiddenTextArea] = useState(true);

  if (isHidden) {
    return (
      <Button
        onClick={() => setIsHidden(!isHidden)}
        mix="order-form__button"
      >
        Открыть форму
      </Button>
    );
  }

  return (
    <div className="order-form">
      <div className="order-form__column">
        <Button
          onClick={() => setIsHidden(!isHidden)}
          mix="order-form__button-close"
        >
          {Icons.cross}
        </Button>
        {/* <span> */}
        {/*  Оставте зявку */}
        {/*  и */}
        {/*  мы свяжемся с вами. */}
        {/* </span> */}
      </div>
      <div className="order-form__column">
        <Field
          placeholder="Почта"
        />
        <Field
          placeholder="Телефон"
        />
        <Button
          mix="order-form__button"
        >
          Заказать
        </Button>
      </div>
      <div className="order-form__column ">
        {isHiddenTextArea
          ? (
            <Button
              onClick={() => setIsHiddenTextArea(!isHiddenTextArea)}
              mix="order-form__textarea-button"
            >
              Добавить описание
            </Button>
          )
          : <Textarea placeholder="Описание заказа" />}
      </div>
    </div>
  );
};
