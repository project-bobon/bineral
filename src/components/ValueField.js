import React from 'react';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class ValueField extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <TextField
          id={ this.props.id }
          hintText={ this.props.hintText }
          errerText={ this.props.errorText }
          floatingLabelText={ this.props.floatingLabelText }
          multiLine={ this.props.multiLine }
          rows={this.props.rows}
      />
    );
  }
}

export default ValueField;
