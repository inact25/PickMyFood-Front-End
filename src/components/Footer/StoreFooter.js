import React, {Component} from 'react';

class StoreFooter extends Component {
    render() {
        const {onNavSelected} = this.props.selected
        return (
            <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" id="dashboard" onClick={(e)=>onNavSelected(e)}>Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="strProfile" onClick={(e)=>onNavSelected(e)}>Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="productMgmt" onClick={(e)=>onNavSelected(e)}>Store Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="orderMgmt" onClick={(e)=>onNavSelected(e)}>User Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="trxMgmt"  onClick={(e)=>onNavSelected(e)}>Category Management</a>
                    </li> <li className="nav-item">
                        <a className="nav-link" id="useFeedback" onClick={(e)=>onNavSelected(e)}>Feedback</a>
                    </li>
                </ul>
                <span className="copyright ml-auto my-auto mr-2">Copyright © 2020
            <a href="" rel="nofollow"> PickMyFood</a>
          </span>
            </footer>
        );
    }
}

export default StoreFooter;