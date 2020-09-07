import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllUserData extends Component {
    render() {
        const {data, load} = this.props

        const type = "User"
        const storeImage = "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        const storeName = "Angga Adji Surya"
        return (
            <>
                <div className="row">
                    {load ?
                       data.map(userList =>
                            <div className="col-3">
                                <ListCard name={userList.userFirstName + " " + userList.userLastName} type={type}
                                          image={storeImage}/>
                            </div>
                        ) : <p>loading</p>}
                </div>
            </>
        );
    }
}

export default AllUserData;