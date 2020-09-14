import React, {Component} from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {connect} from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

class Navbar extends Component {
    state = {
        userData: ""

    }

    getUData = async () => {
        let res = await this.props.usersData
        return res

    }


    componentDidMount() {

        this.getUData()
                .then((res) => {
                    this.setState({
                        userData:res
                    })
                })
                .catch((e) => {
                    console.log(e)
                });


    }

    render() {
        const {onNavSelected} = this.props.selected
        const {onLogout} = this.props.logout
        console.log("ini")
        return (
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                <div className="w-100 d-none d-md-flex d-lg-flex"/>
                <ul className="navbar-nav border-left flex-row ">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#"
                           role="button" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle mr-2"
                                 src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
                                 alt="User Avatar" width="35px"/>
                            <span
                                className="d-none d-md-inline-block">{this.state.userData.userFirstname}</span>


                        </a>
                        <div className="dropdown-menu dropdown-menu-small">
                            <a className="dropdown-item" onClick={() => onNavSelected("profile")}>
                                Profile</a>
                            <a className="dropdown-item" onClick={() => onNavSelected("feedback")}>
                                Feedback</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item text-danger" onClick={() => onLogout()}>
                                Logout </a>
                        </div>
                    </li>
                    <li className="nav-item border-right dropdown notifications">
                        <a className="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-link-icon__wrapper">
                                <h4><IoMdNotificationsOutline/></h4>
                                <span className="badge badge-pill badge-danger">2</span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">
                                <div className="notification__icon-wrapper">
                                    <div className="notification__icon">
                                        <i className="material-icons">&#xE6E1;</i>
                                    </div>
                                </div>
                                <div className="notification__content">
                                    <span className="notification__category">Analytics</span>
                                    <p>Your website’s active users count increased by
                                        <span className="text-success text-semibold">28%</span> in the last week. Great
                                        job!</p>
                                </div>
                            </a>
                            <a className="dropdown-item" href="#">
                                <div className="notification__icon-wrapper">
                                    <div className="notification__icon">
                                        <i className="material-icons">&#xE8D1;</i>
                                    </div>
                                </div>
                                <div className="notification__content">
                                    <span className="notification__category">Sales</span>
                                    <p>Last week your store’s sales count decreased by
                                        <span className="text-danger text-semibold">5.52%</span>. It could have been
                                        worse!</p>
                                </div>
                            </a>
                            <a className="dropdown-item notification__all text-center" href="#"> View all
                                Notifications </a>
                        </div>
                    </li>
                </ul>
                <nav className="nav">
                    <a href="#"
                       className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
                       data-toggle="collapse" data-target=".header-navbar" aria-expanded="false"
                       aria-controls="header-navbar">
                        <i className="material-icons">&#xE5D2;</i>
                    </a>
                </nav>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.fetchReducer.FetchAction.userData

    }
}

export default connect(mapStateToProps, null)(Navbar);