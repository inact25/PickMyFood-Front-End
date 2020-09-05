import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllStoreData extends Component {
    render() {
        const storeName = "KFC Padang"
        const type = "store"
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

export default AllStoreData;