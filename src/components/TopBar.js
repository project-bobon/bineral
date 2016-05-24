import React from 'react';
import AppBar from 'material-ui/AppBar';
import t from '../t';

const TopBar = () => (
  <AppBar
      title={ t("FERTILIZER_CALCULATOR") }
      iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default TopBar;
