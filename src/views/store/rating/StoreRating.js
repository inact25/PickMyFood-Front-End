import React, {Component} from 'react';
import Swal from "sweetalert2";
import {getStoreRating} from "../../../apis/Rating/RatingApi";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import notFound from "../../../assets/img/default/notfound.svg";

class StoreRating extends Component {

    state = {
        id: localStorage.getItem('uid'),
        isLoaded: false
    }
    getStoreRating = () => {
        getStoreRating(this.state.id)
            .then((res) => {
                this.props.StoreRatingData(res.data)
                this.setState({
                    isLoaded: true
                })
            }).catch((e) => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.storeRatingData !== this.props.storeRatingData) {
            this.getStoreRating()
        }
    }


    componentDidMount() {
        this.getStoreRating()
    }

    render() {
        const data = this.props.storeRatingData
        const rate = '✪'
        return (
            <div className="card card-small mb-4 pt-3">
                <div className="card-body">
                    {this.state.isLoaded ?
                        <>
                            {data !== null ?
                                <div className="row">

                                    <div className="col">
                                        <div className="card card-small mb-4">
                                            <div className="card-body p-0 pb-3 text-center table-responsive">
                                                <table className="table mb-0 ">
                                                    <thead className="bg-warning">

                                                    <tr>
                                                        <th scope="col" className="border-0">#</th>
                                                        <th scope="col" className="border-0">Name</th>
                                                        <th scope="col" className="border-0">Rating</th>
                                                        <th scope="col" className="border-0">Description</th>
                                                        <th scope="col" className="border-0">Created</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {data.map((ratingList, index) =>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{ratingList.userFirstname + " " + ratingList.userLastname}</td>

                                                            <td><h5
                                                                className="text-warning">{rate.repeat(ratingList.ratingValue)}</h5>
                                                            </td>
                                                            <td>{ratingList.ratingDescription}</td>
                                                            <td>{ratingList.ratingCreated}</td>
                                                        </tr>
                                                    )}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div className="text-center mb-5 mt-5">
                                    <img width="150px" src={notFound} alt="loading"/>
                                    <p>no data</p>
                                </div>
                            }
                        </>

                        : <div className="text-center">
                            <img width="150px" src={imageLoader} alt="loading"/>
                            <p>loading...</p>
                        </div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeRatingData: state.fetchReducer.FetchAction.storeRatingData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        StoreRatingData: (data) => {
            dispatch({
                type: 'GETALLRATING',
                JsonData: data
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StoreRating);