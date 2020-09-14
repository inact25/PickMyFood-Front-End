import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class StoreSidebar extends Component {
    render() {
        const {selected} = this.props
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
                            <a className="nav-link" id="dashboard" onClick={(e)=>selected(e)}>
                             Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="strProfile" onClick={(e)=>selected(e)}>
                               Store Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="productMgmt" onClick={(e)=>selected(e)}>
                               Product Management
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="orderMgmt" onClick={(e)=>selected(e)}>
                              Order Management
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trxMgmt" onClick={(e)=>selected(e)}>
                               Transaction Management
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="useFeedback" onClick={(e)=>selected(e)}>
                               Feedback
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}
export default StoreSidebar;