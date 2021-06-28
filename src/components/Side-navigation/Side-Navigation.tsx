import React from 'react';
import Logo from '../Logo/Logo';
import './Side-Navigation.scss';

function SideNavigation() {
    return (
        <div className="sidenav">
            <Logo/>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    );
}
export default SideNavigation;