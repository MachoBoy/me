import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className="App">
        hello
        <div className={cx('box')} />
      </div>
    );
  }
}

export default App;
