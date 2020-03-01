// @ts-nocheck
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Loading from './components/Loading';
import NotFound from './components/NotFound';
import Home from './pages/HomeView';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './router';
import './styles/main.scss';

const theme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div className="root-container">
                    <Router>
                        <div className="root-content">
                            <Header routes={routes} />
                            <Switch>
                                {routes.map(route => {
                                    const component = Loadable({
                                        loader: route.component,
                                        loading: Loading,
                                    });
                                    return (
                                        <Route
                                            path={route.layout + route.path}
                                            component={component}
                                            key={route.path}
                                        />
                                    );
                                })}
                                <Route path="/" component={Home} key="/" />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
