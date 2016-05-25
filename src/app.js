import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bineralApp from './reducers';
import App from 'components/App';
import { grey900 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
});

require('../scss/app.scss');

injectTapEventPlugin();
let store = createStore(bineralApp);

render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store={ store }>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
);
