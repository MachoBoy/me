import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import styles from './Box.scss';

const PROJECT_TITLE = [
  {
    title: 'Express Entry Calculator',
    link: 'https://fierce-badlands-70225.herokuapp.com/'
  },
  {
    title: 'Surveily',
    link: 'https://gruesome-fangs-50958.herokuapp.com/'
  }
];

const Box = () => {
  return _.map(PROJECT_TITLE, ({ title, link }) => (
    <div className={styles.box}>
      <a href={link}>{title}</a>
    </div>
  ));
};

export default Box;
