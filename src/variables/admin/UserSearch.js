import React, {Component} from 'react';
import SearchBar from "../../components/forms/SearchBar/SearchBar";

class UserSearch extends Component {
    render() {
        const searchTitle = "User Search"
        const {handle,value} = this.props
        return (
            <div>
                <SearchBar title={searchTitle} handle={handle} value={value}/>
            </div>
        );
    }
}

export default UserSearch;