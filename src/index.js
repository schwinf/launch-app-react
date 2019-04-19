import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import BotNav from './components/BotNav';



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';

render(
    <MuiThemeProvider theme={muiTheme}>
        <App />
        <BotNav />
    </MuiThemeProvider>, 
    document.getElementById('root')
);