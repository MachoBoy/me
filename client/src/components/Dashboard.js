import _ from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Menu from './common/menu';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import styles from '../styles/Dashboard.scss';

const cx = classNames.bind(styles);
const MENU_TITLE = [
  { key: 0, title: 'About' },
  { key: 1, title: 'Project' },
  { key: 2, title: 'Contact' }
];

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

  renderContent() {
    switch (this.state.activeIndex) {
      case 0:
        return <About />;
        break;
      case 1:
        return <Project />;
      case 2:
        return <Contact />;
      default:
        break;
    }
  }

  render() {
    console.log(this.state.activeIndex);
    return (
      <div className={cx('dashboard')}>
        <div className={cx('greeting')}>HELLO</div>
        <div className={cx('menus')}>{this.renderMenu()}</div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default Dashboard;
