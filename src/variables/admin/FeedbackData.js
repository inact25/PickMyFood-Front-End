import React, {Component} from 'react';
import FeedbackCard from "../../components/cards/FeedbackCard";

class FeedbackData extends Component {
    render() {
        const image = "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        const name = "Angga Adji Surya"
        const type = "User"
        const data = "Aplikasinya bagus"

        return (
            <FeedbackCard image={image} name={name} type={type} data={data}/>
        );
    }
}

export default FeedbackData;