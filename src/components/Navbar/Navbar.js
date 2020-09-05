import React, {Component} from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                <div className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                </div>
                <ul className="navbar-nav border-left flex-row">
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

export default Navbar;