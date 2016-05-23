import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SoilTable from './SoilTable';
import TopBar from './TopBar';
import SoilReadings from '../containers/SoilReadings';
import OmClayPercentage from '../containers/OmClayPercentage';

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return(
      <section>
        <TopBar />
        <OmClayPercentage />
        <SoilReadings />
      </section>
    );
  }
};

export default App;
