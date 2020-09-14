import React, {Component} from 'react';
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import AdminFooter from "../components/Footer/AdminFooter";
import '../assets/css/shards-dashboards.1.1.0.min.css'
import '../assets/css/Dashboard.css'
import AdminProfile from "../views/admin/Profile/AdminProfile";
import StoreManagement from "../views/admin/StoreManagement/StoreManagement";
import UserManagement from "../views/admin/UserManagement/UserManagement";
import CategoryManagement from "../views/admin/CategoryManagement/CategoryManagement";
import AdminFeedback from "../views/admin/Feedback/AdminFeedback";
import {isLogin} from "../apis/Auth/AuthApis";
import StoreOwnerProfile from "../views/store/Profile/StoreOwnerProfile";
import StoreSidebar from "../components/Sidebar/StoreSidebar";
import ProductManagement from "../views/store/ProductManagement/ProductManagement";
import OrderManagement from "../views/store/OrderManagement/OrderManagement";
import TransactionManagement from "../views/store/Transaction/TransactionManagement";
import StoreFooter from "../components/Footer/StoreFooter";
import TopupManagement from "../views/store/topup/TopupManagement";

class Dashboard extends Component {
    state = {
        view: <AdminProfile/>,
        title: "Admin Profile"
    }

    onNavSelected = (e) => {
        const data = e.target.id
        switch (data) {
            case "admProfile":
                this.setState({
                    view: <AdminProfile/>,
                    title: "Admin Profile"
                })
                break
            case "storeMgmt":
                this.setState({
                    view: <StoreManagement/>,
                    title: "Store Management"
                })
                break
            case "userMgmt":
                this.setState({
                    view: <UserManagement/>,
                    title: "User Management"
                })
                break
            case "categoryMgmt":
                this.setState({
                    view: <CategoryManagement/>,
                    title: "Category Management"
                })
                break
            case "seeFeedback":
                this.setState({
                    view: <AdminFeedback/>,
                    title: "Feedback"
                })
                break
            case "strProfile":
                this.setState({
                    view: <StoreOwnerProfile/>,
                    title: "Store Profile"
                })
                break
            case "productMgmt" :
                this.setState({
                    view: <ProductManagement/>,
                    title: "Product Management"
                })
                break
           case "orderMgmt" :
                this.setState({
                    view: <OrderManagement/>,
                    title: "Order Management"
                })
                break
            case "trxMgmt" :
                this.setState({
                    view: <TransactionManagement/>,
                    title: "Transaction Management"
                })
                break
            case "walletMgmt" :
                this.setState({
                    view: <TopupManagement/>,
                    title: "Wallet Management"
                })
                break


            default:
                alert("no menu selected")
                break
        }
    }
    onLogout = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }

    componentDidMount() {
        isLogin(this.props.history, this.props.location)
    }

    render() {
        return (
            <div className="h-100">
                <div className="container-fluid">
                    <div className="row">
                        {localStorage.getItem('ustype') !== '1' ?
                            <AdminSidebar selected={this.onNavSelected}/>
                            : <StoreSidebar selected={this.onNavSelected}/>
                        }
                        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                            <div className="main-navbar sticky-top bg-white">
                                <Navbar selected={this} logout={this}/>
                            </div>
                            <div className="main-content-container container-fluid px-4">
                                <Header title= {this.state.title}/>
                                {this.state.view}
                            </div>
                            {localStorage.getItem('ustype') !== '1' ?
                                <AdminFooter selected={this}/>
                                :
                                <StoreFooter selected={this}/>
                            }
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;