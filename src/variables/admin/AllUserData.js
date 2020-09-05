import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllUserData extends Component {
    render() {
        const storeName = "Angga Adji Surya"
        const type = "User"
        const storeImage= "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        return (
            <>
                <div className="row">
                    <div className="col-3">
                        <ListCard name={storeName} type={type} image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type} image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type} image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type}  image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type}  image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type}  image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type}  image={storeImage}/>
                    </div>
                    <div className="col-3">
                        <ListCard name={storeName} type={type}  image={storeImage}/>
                    </div>
                </div>
            </>
        );
    }
}

export default AllUserData;