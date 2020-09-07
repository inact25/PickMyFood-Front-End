import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllStoreData extends Component {
    render() {
        const {data, load} = this.props
        const storeName = "KFC Padang"
        const type = "store"
        const storeImage= "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        return (
            <>
                <div className="row">
                    {load ?
                        data.map(storeList =>
                    <div className="col-3">
                        <ListCard name={storeList.storeName} type={type} image={storeImage}/>
                    </div>
                        ) : <p>loading</p>}
                </div>
            </>
        );
    }
}

export default AllStoreData;