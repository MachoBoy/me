import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Contact.scss';

const cx = classNames.bind(styles);

class Contact extends Component {
  render() {
    return <div className={cx('contact')}> This is contact section</div>;
  }
}

export default Contact;
