import React, {Component} from 'react';

class AdminFooter extends Component {
    render() {
        const {onNavSelected} = this.props.selected
        return (
            <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" id="dashboard"  onClick={(e)=>onNavSelected(e)}>Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile"  onClick={(e)=>onNavSelected(e)}>Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="storeMgmt"  onClick={(e)=>onNavSelected(e)}>Store Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="userMgmt"   onClick={(e)=>onNavSelected(e)}>User Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="categoryMgmt"   onClick={(e)=>onNavSelected(e)}>Category Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="walletMgmt"   onClick={(e)=>onNavSelected(e)}>Wallet Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="feedback" onClick={(e)=>onNavSelected(e)}>Feedback</a>
                    </li>
                </ul>
                <span className="copyright ml-auto my-auto mr-2">Copyright © 2020
            <a href="" rel="nofollow"> PickMyFood</a>
          </span>
            </footer>
        );
    }
}

export default AdminFooter;