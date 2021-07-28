import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";


const theme = {
  colors: {
    primary: '#0094f5',
    secondary: 'transparent'
  }
}


  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>

      </Provider>
    </BrowserRouter>, document.getElementById('root'));

