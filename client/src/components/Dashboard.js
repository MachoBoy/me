import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Card from './common/card';
import About from './About';
import styles from '../styles/Dashboard.scss';

const cx = classNames.bind(styles);

class Dashboard extends Component {
  render() {
    return (
      <div className={cx('dashboard')}>
        <div className={cx('greeting')}>HELLO</div>
        <div className={cx('cards')}>
          <Card title="About" />
          <Card title="Project" />
          <Card title="Contact" />
        </div>
        <div className="about">
          <About />
        </div>
      </div>
    );
  }
}

export default Dashboard;
