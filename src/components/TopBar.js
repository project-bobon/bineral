import React from 'react';
import AppBar from 'material-ui/AppBar';

class TopBar extends React.Component {
  render() {
    return(
      <AppBar
          title='Fertilizer calculator'
          iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
};

export default TopBar;
