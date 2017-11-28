import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Contact.scss';

const cx = classNames.bind(styles);

class Contact extends Component {
  render() {
    return (
      <div className={cx('contact')}>
        Contact
        <div className={cx('contactContents')}>
          <div>email</div>
          <div>github</div>
          <div>Linkedin</div>
        </div>
      </div>
    );
  }
}

export default Contact;
