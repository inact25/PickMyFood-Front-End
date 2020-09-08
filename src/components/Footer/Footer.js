import React, {Component} from 'react';

class Footer extends Component {
    render() {
        const {onNavSelected} = this.props.selected
        return (
            <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>onNavSelected("dashboard")}>Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>onNavSelected("profile")}>Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>onNavSelected("storeMgmt")}>Store Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  onClick={()=>onNavSelected("userMgmt")}>User Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  onClick={()=>onNavSelected("categoryMgmt")}>Category Management</a>
                    </li> <li className="nav-item">
                        <a className="nav-link"onClick={()=>onNavSelected("feedback")}>Feedback</a>
                    </li>
                </ul>
                <span className="copyright ml-auto my-auto mr-2">Copyright © 2020
            <a href="" rel="nofollow"> PickMyFood</a>
          </span>
            </footer>
        );
    }
}

export default Footer;