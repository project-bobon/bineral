import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bineralApp from './reducers';
import App from 'components/App';

require('../scss/app.scss');

injectTapEventPlugin();
let store = createStore(bineralApp);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
);
