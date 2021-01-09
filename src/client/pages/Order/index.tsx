import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './index.sass';
import { CutawayPage } from './chunks/CutawayPage';
import { OrdersBoard } from './chunks/OrdersBoard';
import { Menu } from './chunks/Menu';

export const Order = (props) => {
  const {

  } = props;
  return (
    <div className="order">
      <Menu />
      <div className="order__content">
        <Switch>
          <Route path="/order/cutaway">
            <CutawayPage />
          </Route>
          <Route path="/order/mobile">
            mobile
          </Route>
          <Route path="/order">
            <div>
              Order
            </div>
            {/* <CutawayPage /> */}
          </Route>
        </Switch>
      </div>
      <OrdersBoard />
    </div>
  );
};
