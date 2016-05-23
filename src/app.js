import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bineralApp from './reducers';
import App from 'components/App';

require('../scss/app.scss');

injectTapEventPlugin();
let store = createStore(bineralApp);

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={ store }>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
);
