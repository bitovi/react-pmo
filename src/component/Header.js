import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Displays information about the app and a menu of choices.
 * @returns {JSX.Element}
 */
function Header (props) {
    const { path: matchPath } = props.match;

    function isActiveClass(itemPath) {
        return itemPath === matchPath ? "active" : "";
    }
    
    return (
        <header>
            <nav>
                <h1>place-my-order.com</h1>
                <ul>
                    <li className={isActiveClass("/")}><Link to="/">Home</Link></li>
                    <li className={isActiveClass("/restaurants")}><Link to="/restaurants">Restaurants</Link></li>
                    <li className={isActiveClass("/order-history")}><Link to="/order-history">Order History</Link></li>
                </ul>
            </nav>
        </header>
    );
}

Header.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    })
};

export default Header;
