import React from "react";
import Styles from "./styles.js";

function Header(props) {

    return (
        <nav className="navbar navbar-expand-lg" style={Styles.navStyle}>
            <a className="navbar-brand" href="/" style={Styles.nameStyle}><h1 style={Styles.nameStyle}>Sidney Cabut</h1></a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="btn btn-lg me-4" style={Styles.buttonStyle} onClick={() => {props.changePage("about")}}>About</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-lg me-4" style={Styles.buttonStyle} onClick={() => {props.changePage("portfolio")}}>Portfolio</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-lg me-4" style={Styles.buttonStyle} onClick={() => {props.changePage("contact")}}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}

export default Header;