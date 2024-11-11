import React from "react";

import Styles from "./styles.js";

function Contact() {
    return (
        <div>
            <h1>Contact Me</h1><br></br>
            <a href="https://uk.linkedin.com/in/sidney-cabut-b55789244" style={Styles.linkStyle}><h2>🔗LinkedIn Profile</h2></a><br></br>
            <a href="https://github.com/Sidney-C" style={Styles.linkStyle}><h2>🔗GitHub Profile</h2></a><br></br>
            <a href="https://www.codewars.com/users/998SC" style={Styles.linkStyle}><h2>🔗CodeWars Profile</h2></a><br></br>
            <h2>Email: Sidney.ca<p style={Styles.safeStyle}>hsjshjs</p>but@g<p style={Styles.safeStyle}>hsjshjs</p>mail.c<p style={Styles.safeStyle}>hsjshjs</p>om</h2>
        </div>
    )
}

export default Contact;