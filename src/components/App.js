import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SoilTable from './SoilTable';
import TopBar from './TopBar';
import SoilReadings from '../containers/SoilReadings';
import ReadingField from '../containers/ReadingField';
import t from '../t';

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
        <ReadingField
            id="omClayPercentage"
            hintText={ t('OM_CLAY_PERCENTAGE') }
            floatingLabelText={ t('OM_CLAY_PERCENTAGE') }
            type="number"
        />
        <ReadingField
            id="soilDensity"
            hintText={ t('SOIL_DENSITY') }
            floatingLabelText={ t('SOIL_DENSITY') }
            type="number"
        />
        <SoilReadings />
      </section>
    );
  }
};

export default App;
