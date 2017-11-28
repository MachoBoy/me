import _ from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Greeting from './Greeting';
import Menu from './common/menu';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import styles from '../styles/Dashboard.scss';

const cx = classNames.bind(styles);
const MENU_TITLE = [{ key: 0, title: 'About' }, { key: 1, title: 'Project' }];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  renderMenu() {
    return _.map(MENU_TITLE, ({ key, title }) => (
      <Menu title={title} onClick={() => this.onClickHandler(key)} />
    ));
  }

  onClickHandler(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div className={cx('dashboard')}>
        <div className={cx('greeting')}>
          <Greeting />
        </div>
        <div className={cx('menus')}>{this.renderMenu()}</div>
        <div className={cx('contents')}>
          <About />
          <Project />
        </div>
      </div>
    );
  }
}

export default Dashboard;
