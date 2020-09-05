import React, {Component} from 'react';
import SearchBar from "../../components/forms/SearchBar/SearchBar";

class UserSearch extends Component {
    render() {
        const searchTitle = "User Search"
        return (
            <div>
                <SearchBar title={searchTitle}/>
            </div>
        );
    }
}

export default UserSearch;