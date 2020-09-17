import React, {Component} from 'react';
import ListCard from "../../components/cards/ListCard";

class AllStoreData extends Component {
    render() {
        const {data, dataPopup} = this.props
        const type = "store"
        return (
            <>
                <div className="row">

                    {data.map(storeList =>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ListCard id={storeList.storeID} name={storeList.storeName} type={type} image={storeList.storeImage}
                                      dataPopup={dataPopup}/>
                        </div>
                    )}
                </div>

            </>
        );
    }
}

export default AllStoreData;