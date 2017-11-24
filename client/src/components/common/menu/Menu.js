import React from 'react';
import styles from './Menu.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Menu = ({ key, title, onClick }) => {
  return (
    <div className={cx('menu')} key={key} onClick={onClick}>
      {title}
    </div>
  );
};

export default Menu;
