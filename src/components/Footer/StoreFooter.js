import React, {Component} from 'react';

class StoreFooter extends Component {
    render() {
        const {selected,data} = this.props
        return (
            <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                <ul className="nav">
                    {data.map((link)=>
                        <li className="nav-item">
                            <a title={link.desc} className="nav-link" id={link.id} onClick={(e)=>selected(e)}>
                                {link.name} </a>
                        </li>
                    )}
                </ul>
                <span className="copyright ml-auto my-auto mr-2">Copyright © 2020
            <a href="" rel="nofollow"> PickMyFood</a>
          </span>
            </footer>
        );
    }
}

export default StoreFooter;