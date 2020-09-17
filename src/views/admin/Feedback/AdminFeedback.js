import React, {Component} from 'react';
import FeedbackData from "../../../variables/admin/FeedbackData";
import Pagination from "../../../components/Pagination/Pagination";
import Swal from "sweetalert2";
import {connect} from "react-redux";
import {getAllFeedback} from "../../../apis/Feedbacks/FeedbacksApi";
import imageLoader from "../../../assets/img/loader/loader3.gif";

class AdminFeedback extends Component {

    state = {
        isLoaded: false
    }

    getAllFeedbackData = () => {
        getAllFeedback()
            .then((res) => {
                this.props.FeedbackData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.feedbackData !== this.props.feedbackData) {
            this.getAllFeedbackData()
        }
    }

    componentDidMount() {
        this.getAllFeedbackData()
    }


    render() {
        const allfeedback = this.props.feedbackData
        console.log("props")
        return (
            <>
                {this.state.isLoaded ?
                    <>
                        <div className="row">
                            <FeedbackData data={allfeedback}/>
                        </div>
                        <Pagination/>
                    </>
                    : <div className="text-center">
                        <img width="150px" src={imageLoader} alt="loading"/>
                        <p>loading...</p>
                    </div>}

            </>
        )
            ;
    }
}

const mapStateToProps = (state) => {
    return {
        feedbackData: state.fetchReducer.FetchAction.allfeedbackData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FeedbackData: (data) => {
            dispatch({
                type: 'GETALLFEEDBACK',
                JsonData: data
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminFeedback);