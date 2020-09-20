import React, {Component} from 'react';
import SearchBar from "../../components/forms/SearchBar/SearchBar";

class StoreSearch extends Component {

    render() {
        const {handle,value} = this.props
        const searchTitle = "Store Search"
        return (
            <div>
                <SearchBar title={searchTitle} handle={handle} value={value}/>
            </div>
        );
    }
}

export default StoreSearch;