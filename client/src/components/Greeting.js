import _ from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Greeting.scss';

const cx = classNames.bind(styles);

const GREETING_HELLO = [
  { key: 'english', text: 'HELLO' },
  { key: 'korean', text: '안녕하세요' },
  { key: 'japanese', text: '今日は' },
  { key: 'chinese', text: '你好' },
  { key: 'french', text: 'Bonjour' },
  { key: 'italian', text: 'Ciao' },
  { key: 'spanish', text: '¡Hola!' },
  { key: 'hindi', text: 'नमस्ते' }
];

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  onClickHandler(event) {
    event.preventDefault();
    let activeIndex = this.state.activeIndex;

    if (activeIndex === GREETING_HELLO.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    this.setState({ activeIndex });
  }

  render() {
    console.log(this.props);
    return (
      <div className={cx('greeting')} onClick={e => this.onClickHandler(e)}>
        <article>{GREETING_HELLO[this.state.activeIndex].text}</article>
      </div>
    );
  }
}

export default Greeting;
