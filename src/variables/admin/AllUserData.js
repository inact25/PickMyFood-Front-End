import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllUserData extends Component {
    render() {
        const {data} = this.props

        const type = "User"
        const storeImage = "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        return (
            <>
                <div className="row">

                    {data.map(userList =>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <ListCard name={userList.userFirstName + " " + userList.userLastName} type={type}
                                          image={storeImage}/>
                            </div>
                        ) }
                </div>
            </>
        );
    }
}

export default AllUserData;