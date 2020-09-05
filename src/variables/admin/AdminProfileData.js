import React, {Component} from 'react';

class AdminProfileData extends Component {
    render() {
        return (
            <>
                <div className="card card-small mb-4 pt-3">
                    <div className="card-header border-bottom text-center">
                        <div className="mb-3 mx-auto">
                            <img className="rounded-circle"
                                 src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
                                 alt="User Avatar" width="110"/></div>
                        <h4 className="mb-0">Angga Adji Surya</h4>
                        <span className="text-muted d-block mb-2">App Admin</span>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item px-4">
                        </li>
                        <li className="list-group-item p-4">
                            <strong className="text-muted d-block mb-2">Status</strong>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</span>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default AdminProfileData;