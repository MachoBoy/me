import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Contact.scss';

const cx = classNames.bind(styles);

class Contact extends Component {
  render() {
    return (
      <div className={cx('contact')}>
        <div>This is Project section</div>
        <p>
          Jiwon Park is a Web Developer born 1987 in Busan, Korea. My job is to
          build a web application, which is functional, user-friendly and trendy
          styling
        </p>
        <p>My Skills</p>
        HTML, CSS, SASS, React, React-Native, NodeJS, Photoshop
      </div>
    );
  }
}

export default Contact;
