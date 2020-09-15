import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from "../Layout/Dashboard";
import AdminLoginLayout from "../views/Frontline/AdminLoginLayout";
import StoreRegisterLayout from "../views/Frontline/StoreRegisterLayout";
import ProductManagement from "../views/store/ProductManagement/ProductManagement";
import StoreLoginLayout from "../views/Frontline/StoreLoginLayout";
import OrderManagement from "../views/store/OrderManagement/OrderManagement";
import Invoice from "../views/store/OrderManagement/Invoice";
import ProductDetail from "../views/store/ProductManagement/ProductDetail";
import TopupManagement from "../views/store/topup/TopupManagement";

class RouteLink extends Component {
    render() {
        return (

                <Switch>
                    <Redirect exact from='/dashboard' to="/"/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/devmas" component={AdminLoginLayout}/>
                    <Route exact path="/login" component={StoreLoginLayout}/>
                    <Route exact path="/register" component={StoreRegisterLayout}/>
                    <Route exact component={}/>
                </Switch>
        );
    }
}

export default RouteLink;