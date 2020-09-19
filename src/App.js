import React, {Component} from 'react';

import Dashboard from "./Layout/Dashboard";
import './assets/css/Login.css'
import {HashRouter} from 'react-router-dom';
import RouteLink from "./Route/RouteLink";

class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <RouteLink/>
                </HashRouter>
            </div>
        );
    }
}

export default App;

