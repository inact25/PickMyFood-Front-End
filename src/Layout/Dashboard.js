import React, {Component} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../assets/css/shards-dashboards.1.1.0.min.css'
import '../assets/css/Dashboard.css'
import AdminProfile from "../views/admin/Profile/AdminProfile";
import StoreManagement from "../views/admin/StoreManagement/StoreManagement";
import UserManagement from "../views/admin/UserManagement/UserManagement";
import CategoryManagement from "../views/admin/CategoryManagement/CategoryManagement";
import AdminFeedback from "../views/admin/Feedback/AdminFeedback";
import {isLogin} from "../apis/Auth/Auth";

class Dashboard extends Component {
    state = {
        view: <AdminProfile/>,
        title: "Admin Profile"
    }

    onNavSelected = (data) => {
        switch (data) {
            case "profile":
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
            case "feedback":
                this.setState({
                    view: <AdminFeedback/>,
                    title: "Feedback"
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
                        <Sidebar selected={this}/>
                        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                            <div className="main-navbar sticky-top bg-white">
                                <Navbar selected={this} logout={this}/>
                            </div>
                            <div className="main-content-container container-fluid px-4">
                                <Header title= {this.state.title}/>
                                {this.state.view}
                            </div>
                            <Footer selected={this}/>

                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;