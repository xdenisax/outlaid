import React from 'react';
import Logo from '../Logo/Logo';
import './Side-Navigation.scss';

function SideNavigation() {
    const handleLinkClick = () => {

    }
    return (
        <div className="sidenav">
            <Logo/>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link home" href="#" onClick={handleLinkClick}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portofolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    );
}
export default SideNavigation;