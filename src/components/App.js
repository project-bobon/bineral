import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardHeader, Divider, Paper } from 'material-ui';
import { grey900, grey800, grey700 } from 'material-ui/styles/colors';

import SoilTable from './SoilTable';
import TopBar from './TopBar';
import SoilReadings from '../containers/SoilReadings';
import ReadingField from '../containers/ReadingField';
import t from '../t';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
    primary2Color: grey800,
    primary3Color: grey700
  },
  appBar: {
    height: 50
  },
  palette: {
    primary1Color: grey900
  }
});

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return { muiTheme: getMuiTheme(muiTheme) };
  }

  render() {
    return(
      <div className="wrapper">
        <TopBar />
        <section className="main-content">
          <Card style={ {
              padding: '20px',
              marginBottom: '20px',
              marginTop: '20px'
            } }
          >
            <CardHeader
                title="Physical Properties"
                style={ {padding: 0} }
            />
            <ReadingField
                id="omClayPercentage"
                hintText={ t('OM_CLAY_PERCENTAGE') }
                floatingLabelText={ t('OM_CLAY_PERCENTAGE') }
                type="number"
                fullWidth={ true }
                underlineShow={ false }
            />
            <Divider />
            <ReadingField
                id="soilDensity"
                hintText={ t('SOIL_DENSITY') }
                floatingLabelText={ t('SOIL_DENSITY') }
                type="number"
                fullWidth={ true }
                underlineShow={ false }
            />
            <Divider />
          </Card>
          <Card style={ {
              padding: '20px',
              marginBottom: '20px',
              marginTop: '20px'
            } }
          >
            <CardHeader
                title="Soil's Alalysis Results"
                style={ {padding: 0} }
            />
            <SoilReadings />
          </Card>
        </section>
      </div>
    );
  }
};

export default App;
