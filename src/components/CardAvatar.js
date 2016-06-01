import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 50,
  lineHeight: '50px',
  width: 50,
  margin: 0,
  marginRight: 20,
  textAlign: 'center',
  display: 'inline-block',
  background: '#ffe74d',
  color: '#222'
};

const CardAvatar = ({ text, customStyle = {} }) => (
  <Paper
    style={ {...style, customStyle } }
    circle={ true }
  >
    { text }
  </Paper>
);

export default CardAvatar;
