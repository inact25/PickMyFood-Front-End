import React, {Component} from 'react';

import Dashboard from "./Layout/Dashboard";
import './assets/css/Login.css'
import {BrowserRouter} from 'react-router-dom';
import RouteLink from "./Route/RouteLink";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <RouteLink/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

