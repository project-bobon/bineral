import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import App from '../src/components/App';
import bineralApp from '../src/reducers';
import { getOptimizedSoilValues } from '../src/helpers';

export const renderApp = () => {
  let store = createStore(bineralApp);
  return mount(
    <Provider store={ store }>
      <App />
    </Provider>
  );
};
