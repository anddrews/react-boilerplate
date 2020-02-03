import React from 'react';

import {styleNames} from 'utils';

import styles from './test.scss';

const sn = styleNames(styles);

export const Test = ({description}) => (
  <div className={sn('test')}>
    {description}
  </div>
);
