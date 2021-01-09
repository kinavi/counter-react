import React, { useState } from 'react';
import classnames from 'classnames';
import { OrdersBoardType } from './types';
import './index.sass';
import { Button } from '../../../../component/UI/Button';
import { Icons } from '../../../../component/UI/Icons';

export const OrdersBoard = (props: OrdersBoardType) => {
  const {
    mix,
  } = props;

  const [isHidden, setIsHidden] = useState(true);

  const renderButton = () => (
    <Button
      mix={classnames(isHidden
        ? 'orders-board__hidden-button'
        : 'orders-board__close-button')}
      onClick={() => setIsHidden(!isHidden)}
    >
      {isHidden ? Icons.Board : Icons.cross }
    </Button>
  );

  if (isHidden) {
    return (
      renderButton()
    );
  }

  return (
    <div className={classnames('orders-board', mix)}>
      {renderButton()}
      <div className="orders-board__title">
        Активные заказы
      </div>
      <div className="orders-board__content">
        content
      </div>
    </div>
  );
};
