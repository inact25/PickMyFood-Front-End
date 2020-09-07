import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render() {
        const {onNavSelected} = this.props.selected
        return (
            <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                <div className="main-navbar">
                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                        <Link className="navbar-brand w-100 mr-0" to="/" style={{lineHeight: "25px"}}>
                            <div className="d-table m-auto">
                                    <span className="d-none d-md-inline ml-1">PickMyFood</span>
                            </div>
                        </Link>
                        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                           asdad
                        </a>
                    </nav>
                </div>

                <div className="nav-wrapper">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" onClick={()=>onNavSelected("dashboard")}>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>onNavSelected("profile")}>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>onNavSelected("storeMgmt")}>
                                    <span>Store Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "  onClick={()=>onNavSelected("userMgmt")}>
                                <span>User Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>onNavSelected("categoryMgmt")}>
                                <span>Category Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>onNavSelected("feedback")}>
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