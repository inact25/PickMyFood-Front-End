import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">User Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Category Management</a>
                    </li> <li className="nav-item">
                        <a className="nav-link" href="#">Feedback</a>
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