import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from 'components/app';
import {store} from './store/store-config';

const rootNode = document.getElementById('root'); // eslint-disable-line no-undef
const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, rootNode);
