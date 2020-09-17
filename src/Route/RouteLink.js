import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from "../Layout/Dashboard";
import AdminLoginLayout from "../views/Frontline/AdminLoginLayout";
import StoreRegisterLayout from "../views/Frontline/StoreRegisterLayout";
import StoreLoginLayout from "../views/Frontline/StoreLoginLayout";
import Feedbacks from "../views/store/Feedback/Feedbacks";
import StoreRating from "../views/store/rating/StoreRating";

class RouteLink extends Component {
    render() {
        return (
                <Switch>
                    <Redirect exact from='/dashboard' to="/"/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/devmas" component={AdminLoginLayout}/>
                    <Route exact path="/login" component={StoreLoginLayout}/>
                    <Route exact path="/register" component={StoreRegisterLayout}/>
                    <Route exact component={StoreRating}/>
                </Switch>
        );
    }
}

export default RouteLink;