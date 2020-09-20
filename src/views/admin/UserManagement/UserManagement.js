import React, {Component} from 'react';
import Pagination from "../../../components/Pagination/Pagination";
import UserSearch from "../../../variables/admin/UserSearch";
import AllUserData from "../../../variables/admin/AllUserData";
import {connect} from "react-redux";
import Swal from "sweetalert2";
import {getActiveUsers, getDeletedUsers,reactiveUser} from "../../../apis/User/UserApis";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import withReactContent from "sweetalert2-react-content";
import UserViewProfile from "./UserViewProfile";
import {RiDeleteBin6Line, RiStore2Line} from "react-icons/ri";


class UserManagement extends Component {

    state = {
        isLoaded: false,
        switch: 0
    }

    cardPopupRead = (e) => {
        const MySwal = withReactContent(Swal)
        sessionStorage.setItem("strSelected", e.target.id)
        MySwal.fire({
            html: (
                <>
                    <UserViewProfile/>
                </>),
            customClass: 'swal-detail',
            showCancelButton: true,
            showConfirmButton: false,
        })
    }

    getActiveUsersData = () => {
        getActiveUsers()
            .then((res) => {
                this.props.UserActiveData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };
    getDeletedUsersData = () => {
        getDeletedUsers()
            .then((res) => {
                this.props.UserDeleteData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    switch = (e) => {
        this.setState({
            switch: parseInt(e.target.id)
        })
    }

    cardPopupChange = (e) => {
        const id = e.target.id
        const myswal = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success btn-pill m-1',
                cancelButton: 'btn btn-danger btn-pill m-1'
            },
            buttonsStyling: false
        })
        myswal.fire({
            title: 'Wanna reactive this user ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, restore it!'
        }).then((result) => {
            if (result.isConfirmed) {
                reactiveUser(id)
                    .then(() => {
                            myswal.fire(
                                'Actived!',
                                'User has been reactived.',
                                'success'
                            )

                        }
                    ).catch((e) => {
                    Swal.fire("Oops", "Connection Timeout !!!", "error")
                })


            }
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeUserData !== this.props.activeUserData) {
            this.getActiveUsersData()
        }
        if (prevProps.deletedUserData !== this.props.deletedUserData) {
            this.getDeletedUsersData()
        }
    }


    componentDidMount() {
        this.getActiveUsersData()
        this.getDeletedUsersData()
    }

    render() {

        const activeUser = this.props.activeUserData
        const deletedUser = this.props.deletedUserData
        console.log("deletedUSer")
        console.log(deletedUser)

        return (
            <>

                <div className="card">
                    {this.state.isLoaded ?
                        <>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-9 col-md-9 col-sm-12 text-center">
                                        <UserSearch/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label style={{maxHeight: "3rem"}}
                                                   className="btn btn-lg btn-warning active btn-pill">
                                                <input onClick={(e) => {
                                                    this.switch(e)
                                                }} type="radio" name="options" id="0" autoComplete="off"/><h5
                                                className='text-dark'><RiStore2Line/></h5>
                                            </label>
                                            <label style={{maxHeight: "3rem"}}
                                                   className="btn btn-lg btn-danger btn-pill">
                                                <input onClick={(e) => {
                                                    this.switch(e)
                                                }} type="radio" name="options" id="1" autoComplete="off"/><h5
                                                className='text-white'><RiDeleteBin6Line/></h5>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                {this.state.switch !== 1 ?
                                    <AllUserData data={activeUser}
                                                 load={this.state.isLoaded}
                                                 dataPopup={this.cardPopupRead}
                                    />
                                    :
                                    <AllUserData data={deletedUser}
                                                  load={this.state.isLoaded}
                                                  dataPopup={this.cardPopupChange}

                                    />
                                }
                            </div>
                            <div className="card-footer">
                                <Pagination/>
                            </div>
                        </>
                        : <div className="text-center">
                            <img width="150px" src={imageLoader} alt="loading"/>
                            <p>loading...</p>
                        </div>}
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        activeUserData: state.userReducer.UserAction.activeUserData,
        deletedUserData: state.userReducer.UserAction.deletedUserData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserActiveData: (data) => {
            dispatch({
                type: 'GETACTIVEUSERS',
                JsonData: data
            })
        },
        UserDeleteData: (data) => {
            dispatch({
                type: 'GETDELETEDUSERS',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);