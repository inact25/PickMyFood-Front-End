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
import TopupManagement from "../views/admin/topup/TopupManagement";
import {adminSidebar, storeSidebar} from "../variables/sidebars/Sidebar";
import {cleanCookies} from "universal-cookie/cjs/utils";
import Feedbacks from "../views/store/Feedback/Feedbacks";
import StoreRating from "../views/store/rating/StoreRating";
import swal from "sweetalert2"

class Dashboard extends Component {
    state = {
        view: '',
        title: "Profile"
    }

    onNavSelected = (e) => {
        const data = e.target
        swal.close()
        switch (data.id) {
            case "4b08d55efc31e06abc63f2901bfb273b":
                this.setState({
                    view: <AdminProfile/>,
                    title: 'Admin Profile'
                })
                break
            case "5f108f1952edff4ed58ca754a9c1531b":
                this.setState({
                    view: <StoreManagement/>,
                    title:'Store Management'
                })
                break
            case "92726ab5faeb2cb9208eaac9af0346bd":
                this.setState({
                    view: <UserManagement/>,
                    title : 'User Management'
                })
                break
            case "8028b5d71f970c6654ba97e09c0569c2":
                this.setState({
                    view: <CategoryManagement/>,
                    title: 'Category Management'
                })
                break
            case "e059284b1f4af154c8ff0f79857c1264" :
                this.setState({
                    view: <TopupManagement/>,
                    title: 'Wallet Management'
                })
                break
            case "bea4c2c8eb82d05891ddd71584881b56":
                this.setState({
                    view: <AdminFeedback/>,
                    title: 'Feedback'
                })
                break
            case "aec918ad0d66a6f20b8b0414941d3d21":
                this.setState({
                    view: <StoreOwnerProfile/>,
                    title:'Store Profile'
                })
                break
            case "948590535142d16883c105bb52330fb2" :
                this.setState({
                    view: <ProductManagement/>,
                    title:'Product Management'
                })
                break
           case "c4dcb7da043e8feef88ce236dd7ab5bd" :
                this.setState({
                    view: <OrderManagement/>,
                    title:'Order Management'
                })
                break
            case "a428aedf75096a146a3b9d49aa245a77" :
                this.setState({
                    view: <TransactionManagement/>,
                    title:'Transaction Management'
                })
                break
            case "dda9c06f33071c9b6fc237ee164109d8":
                this.setState({
                    view: <StoreRating/>,
                    title: 'User Rating'
                })
                break
            case "10dd401212b5abd572eeb77109ab7783" :
                this.setState({
                    view: <Feedbacks/>,
                    title:'Feedback'
                })
                break

            default:
                alert("no menu selected")
                break
        }
    }
    onLogout = () => {
        localStorage.clear()
        sessionStorage.clear()
        cleanCookies()
        this.props.history.push('/login')
    }

    componentDidMount() {
        isLogin(this.props.history, this.props.location)
        if (localStorage.getItem('ustype') === '0') {
            this.setState({
                view: <StoreOwnerProfile/>
            })
        }
        if (localStorage.getItem('ustype') === '3') {
            this.setState({
                view: <AdminProfile/>
            })
        }
    }


    render() {
        return (
            <div className="h-100">
                <div className="container-fluid">
                    <div className="row">
                        {localStorage.getItem('ustype') !== '0' ?
                            <AdminSidebar
                                data={adminSidebar}
                                selected={this.onNavSelected}
                            />
                            : <StoreSidebar data={storeSidebar} selected={this.onNavSelected}/>
                        }
                        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                            <div className="main-navbar sticky-top bg-white">

                                {localStorage.getItem('ustype') !== '0' ?
                                    <Navbar
                                        data={adminSidebar}
                                        logout={this}
                                        selected={this.onNavSelected}
                                    />
                                    : <Navbar data={storeSidebar}  logout={this}  selected={this.onNavSelected}/>
                                }
                            </div>
                            <div className="main-content-container container-fluid px-4">
                                <Header title= {this.state.title}/>
                                {this.state.view}
                            </div>
                            {localStorage.getItem('ustype') !== '0' ?
                                <AdminFooter data={adminSidebar} selected={this.onNavSelected}/>
                                :
                                <StoreFooter data={storeSidebar} selected={this.onNavSelected}/>
                            }
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;