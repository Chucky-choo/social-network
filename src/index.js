import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import { QueryParamProvider } from 'use-query-params';


const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#0094f5',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    palette: {
      main: 'black',
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </Provider>
</QueryParamProvider>
  </BrowserRouter>, document.getElementById('root'));

