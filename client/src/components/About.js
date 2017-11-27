import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/About.scss';

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx('about')}>
      <h4 style={{ margin: '5px' }}>A FEW WORDS ABOUT ME</h4>
      <img className={cx('photo')} src={require('../images/me.jpg')} />
      <div className={cx('aboutContent')}>
        <div className="myself">
          <p>
            Jiwon Park is a Web Developer born 1987 in Busan, Korea. <br />
            My job is to build a web application, which is functional,
            user-friendly and trendy styling.<br />
            I spent my days crafting and styling websites. I'm constantly
            learning web technologies, currently playing around with ReactJS and
            SASS.<br />
            <br />
            Some of my skills include:
          </p>
        </div>
        <div className="skills">
          <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>React</li>
            <li>React-Native</li>
            <li>NodeJS</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
