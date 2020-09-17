import React, {Component} from 'react';
import {sendFeedBack} from "../../../apis/Feedbacks/FeedbacksApi";
import Swal from "sweetalert2";

class Feedbacks extends Component {

    state = {
        data: [],
    }

    inputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: [value]
            }
        }))
    }

    sendFeedback = (event) => {
        event.preventDefault();
        sendFeedBack(localStorage.getItem('uid'),this.state.data)
            .then(() => {
                Swal.fire("Good job!", "Store Updated", "success")
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }

    render() {
        return (
            <div>
                <div className="col-lg-6 col-xl-6 mx-auto">
                    <div className="card">
                        <div className="text-center mt-3">
                            <h5>Tell the Administrator</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.sendFeedback}>
                                <div className="mb-3">
                                    <textarea onChange={this.inputHandler} name="value"
                                              placeholder="Wanna say somethings to Admin ?" style={{minHeight: "15rem"}}
                                              className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-block btn-warning btn-pill">Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedbacks;