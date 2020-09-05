import React, {Component} from 'react';
import FeedbackData from "../../../variables/admin/FeedbackData";
import Pagination from "../../../components/Pagination/Pagination";

class AdminFeedback extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6">
                        <FeedbackData/>
                    </div>
                    <div className="col-6">
                        <FeedbackData/>
                    </div>
                    <div className="col-6">
                        <FeedbackData/>
                    </div>
                    <div className="col-6">
                        <FeedbackData/>
                    </div>
                </div>
                <Pagination/>

            </>
        );
    }
}

export default AdminFeedback;