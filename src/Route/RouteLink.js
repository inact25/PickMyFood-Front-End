import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from "../Layout/Dashboard";
import LoginLayout from "../views/LoginLayout";
import StoreRegisterLayout from "../views/store/StoreRegisterLayout";

class RouteLink extends Component {
    render() {
        return (

                <Switch>
                    <Redirect exact from='/dashboard' to="/"/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/login" component={LoginLayout}/>
                    <Route exact path="/register" component={StoreRegisterLayout}/>
                </Switch>
        );
    }
}

export default RouteLink;