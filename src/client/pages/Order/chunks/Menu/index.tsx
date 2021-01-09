import React from 'react';
import { Link } from '../../../../component/UI/Link';
import { Icons } from '../../../../component/UI/Icons';
import './index.sass';

export const Menu = (props) => {
  const {

  } = props;
  return (
    <div className="menu">
      <Link
        href="/order"
        className="menu__logo"
        blockActive
      >
        {Icons.OrderLogo({ size: 'bs' })}
      </Link>
      <div className="menu__list">
        <div className="menu__label">
          Меню
        </div>
        <Link
          href="/order/cutaway"
          className="menu__item"
        >
          САЙТ-ВИЗИТКА
        </Link>
        <Link
          href="/order/mobile"
          className="menu__item"
        >
          Мобильная разработка
        </Link>
      </div>
    </div>
  );
};
