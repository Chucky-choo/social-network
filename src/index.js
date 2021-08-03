import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';


// const theme = {
//   colors: {
//     primary: '#0094f5',
//     secondary: 'transparent'
//   }
// }


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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>

    </Provider>
  </BrowserRouter>, document.getElementById('root'));

