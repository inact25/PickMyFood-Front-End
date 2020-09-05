import React, {Component} from 'react';
import {GoDashboard} from 'react-icons/go';

class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                <div className="main-navbar">
                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                        <a className="navbar-brand w-100 mr-0" href="#" style={{lineHeight: "25px"}}>
                            <div className="d-table m-auto">
                                    <span className="d-none d-md-inline ml-1">PickMyFood</span>
                            </div>
                        </a>
                        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                           asdad
                        </a>
                    </nav>
                </div>

                <div className="nav-wrapper">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="">
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">
                                <span>Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">
                                    <span>Store Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">
                                <span>User Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">
                                <span>Category Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">
                                <span>Feedback</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}
export default Sidebar;