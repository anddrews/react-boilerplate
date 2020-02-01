import React from 'react';

import {styleNames} from 'utils';

import styles from './test.module.scss';

const sn = styleNames(styles);

export const Test = () => (
  <div className={sn('test')}>
    Test
  </div>
);
