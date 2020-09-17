import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AdminSidebar extends Component {
    render() {
        const {selected,data} = this.props
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
                        {data.map((link)=>
                        <li className="nav-item" >
                            <a title={link.desc} className="nav-link" id={link.id} onClick={(e)=>selected(e)}>
                                {link.name}
                            </a>
                        </li>
                        )}

                    </ul>
                </div>
            </aside>
        );
    }
}
export default AdminSidebar;