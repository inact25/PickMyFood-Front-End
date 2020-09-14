import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllUserData extends Component {
    render() {
        const {data, dataPopup} = this.props
        const type = "User"
        return (
            <>
                <div className="row">

                    {data.map(userList =>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ListCard id={userList.userID} name={userList.userFirstName + " " + userList.userLastName} type={type}
                                      image={userList.userImage}
                                      dataPopup={dataPopup}/>
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default AllUserData;