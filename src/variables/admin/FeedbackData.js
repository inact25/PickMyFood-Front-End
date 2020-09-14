import React, {Component} from 'react';
import FeedbackCard from "../../components/cards/FeedbackCard";

class FeedbackData extends Component {
    render() {
        const {data} = this.props

        return (
            <>
                {data.map((feedback) =>

                        <div className="col-6">
                            <FeedbackCard image={"https://www.creativefabrica.com/wp-content/uploads/2019/01/Want-your-feedback-icon-by-back1design1.png"} name={feedback.storeID} type={feedback.feedbackCreated}
                                          data={feedback.feedbackValue}/>
                        </div>
                        )}
            </>
                );
                }
                }

                export default FeedbackData;