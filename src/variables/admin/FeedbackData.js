import React, {Component} from 'react';
import FeedbackCard from "../../components/cards/FeedbackCard";

class FeedbackData extends Component {
    render() {
        const {data} = this.props

        return (
            <>
                {data.map(feedback =>
                    <div className="col-6">
                        <FeedbackCard image={feedback.image} name={feedback.name} type={feedback.type} data={feedback.description}/>
                    </div>
                )}
            </>
        );
    }
}

export default FeedbackData;