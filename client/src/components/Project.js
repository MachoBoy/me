import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Project.scss';
import Box from './common/box';

const cx = classNames.bind(styles);

class Project extends Component {
  render() {
    return (
      <div className={cx('project')}>
        <h4 style={{ marginLeft: '15px' }}>Projects</h4>
        <div className={cx('projectContent')}>
          <Box />
        </div>
      </div>
    );
  }
}

export default Project;
