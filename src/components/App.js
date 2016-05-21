import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import LeaveTable from './LeaveTable';
import SoilTable from './SoilTable';
import TopBar from './TopBar';

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
        <SoilTable />
        <LeaveTable />
      </section>
    );
  }
};

export default App;
