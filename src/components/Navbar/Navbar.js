import React, {Component} from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io'
import Swal from "sweetalert2";
import {getAdminProfile} from "../../apis/Admin/Admin";
import {getStoreProfile} from "../../apis/Store/Store";

class Navbar extends Component {
    state = {
        restData:[],
        isLoaded:false
    }

    getAdminProfile = (id) => {
        if (localStorage.getItem('ustype') === '3'){
            getAdminProfile(id)
                .then((res) => {
                    this.setState({
                        isLoaded: true,
                        restData: res
                    })
                })
                .catch(() => {
                    Swal.fire("Oops", "Connection Timeout !!!", "error")
                });
        }else {
            getStoreProfile(id)
                .then((res) => {
                    this.setState({
                        isLoaded: true,
                        restData: res
                    })
                })
                .catch(() => {
                    Swal.fire("Oops", "Connection Timeout !!!", "error")
                });
        }


    };

    componentDidMount() {
        this.getAdminProfile(localStorage.getItem('uid'))
    }

    render() {
        const {onLogout} = this.props.logout
        const data = this.state.restData
        console.log(data)
        console.log("stimage")
        console.log(data.storeImage)
        return (
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                <div className="w-100 d-none d-md-flex d-lg-flex"/>
                <ul className="navbar-nav border-left flex-row ">

                    <li className="nav-item border-right dropdown notifications">
                        <a className="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-link-icon__wrapper">
                                <h4><IoMdNotificationsOutline/></h4>
                                <span className="badge badge-pill badge-danger"/>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        {this.state.isLoaded ?
                        <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#"
                           role="button" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle mr-2"
                                 style={{height: "3em",
                                     objectFit: "cover"}}
                                 src={data.storeImage !== undefined ? data.storeImage : data.userImage }
                                 alt="User Avatar"/>
                            {data.storeOwner !== undefined ?
                                <span className="d-none d-md-inline-block">{data.storeOwner}</span>
                                :
                                <span className="d-none d-md-inline-block">{data.userFirstName+" "+data.userLastName}</span>
                            }
                        </a>
                            : <div/>
                        }
                        <div className="dropdown-menu dropdown-menu-small">
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item text-danger" onClick={() => onLogout()}>
                                Logout </a>
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