import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"
class Navbar extends React.Component {
    render() {
        return (
            <div className="NavList">
                <Link to="/Contact">Contact</Link>
                <Link to="/Products">Products</Link>
                <Link to="/">Home</Link>
            </div>
        );
    }
}
export default Navbar;