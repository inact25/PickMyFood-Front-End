import React, {Component} from 'react';
import SearchBar from "../../components/forms/SearchBar/SearchBar";

class StoreSearch extends Component {

    render() {
        const searchTitle = "Store Search"
        return (
            <div>
                <SearchBar title={searchTitle}/>
            </div>
        );
    }
}

export default StoreSearch;