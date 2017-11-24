import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Project.scss';

const cx = classNames.bind(styles);

class Project extends Component {
  render() {
    return <div className={cx('project')}> This is Project section</div>;
  }
}

export default Project;
