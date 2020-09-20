import React, {Component} from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io'
import Swal from "sweetalert2";
import {getAdminProfile} from "../../apis/Admin/Admin";
import {getStoreProfile} from "../../apis/Store/StoreApi";
import {GiHamburgerMenu} from "react-icons/gi";
import withReactContent from "sweetalert2-react-content";
import AdminSidebar from "../Sidebar/AdminSidebar";

class Navbar extends Component {
    state = {
        restData:[],
        isLoaded:false
    }

    popupMenu = () =>{
        const MySwal = withReactContent(Swal)
        const {data, selected} = this.props
        MySwal.fire({
            html: (
                <>
                    <div className="nav-wrapper">
                        <ul className="nav flex-column">
                            {data.map((link)=>
                                <li className="nav-item">
                                    <a title={link.desc} className="nav-link" id={link.id} onClick={(e)=>selected(e)}>
                                        {link.name} </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </>
            ),
            showCloseButton:false,
            showConfirmButton:false,
            showClass:{
                popup : 'animate__animated animate__fadeInUpBig'
            },
            hideClass:{
                popup : 'animate__animated animate__fadeOutDownBig'
            },
            position:'bottom'
        },)
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.restData !== this.state.restData) {
            this.getAdminProfile(localStorage.getItem('uid'))
        }
    }


    componentDidMount() {
        this.getAdminProfile(localStorage.getItem('uid'))
    }

    render() {
        const {onLogout} = this.props.logout
        const data = this.state.restData
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
                    <a onClick={this.popupMenu}
                       className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left">
                        <i><GiHamburgerMenu/></i>
                    </a>
                </nav>
            </nav>
        );
    }
}


export default Navbar;