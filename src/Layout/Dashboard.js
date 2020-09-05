import React, {Component} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CategoryManagement from "../views/admin/CategoryManagement/CategoryManagement";
import UserManagement from "../views/admin/UserManagement/UserManagement";
import '../assets/css/shards-dashboards.1.1.0.min.css'
import '../assets/css/Dashboard.css'
import AdminProfile from "../views/admin/Profile/AdminProfile";



class Dashboard extends Component {
    render() {

        return (
            <div className="h-100">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                            <div className="main-navbar sticky-top bg-white">
                                <Navbar/>
                            </div>
                            <div className="main-content-container container-fluid px-4">
                                <Header title={"Category Management"}/>
                                <AdminProfile/>
                            </div>
                            <Footer/>

                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;