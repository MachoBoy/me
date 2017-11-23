import React from 'react';
import styles from './Card.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Card = ({ title, description }) => {
  return (
    <div className={cx('card')}>
      {title}
      <div>{description}</div>
    </div>
  );
};

export default Card;
