import React, { Component } from 'react';
import Tabs from './components/Tabs/Tabs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Tabs />
      </MuiThemeProvider>
    );
  }
}

export default App;
