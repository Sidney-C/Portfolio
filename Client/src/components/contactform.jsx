import React from "react";

import Styles from "./styles.js";

function ContactForm() {

    function sendEmail() {

    }

    return (
        <form onSubmit={sendEmail}>
            <div class="mb-3" style={Styles.inputStyle}>
                <br></br>
                <label className="form-label">Your Email Address</label>
                <input type="email" className="form-control" id="yourEmail" required /><br></br>
                <label className="form-label">Message Subject</label>
                <input type="text" className="form-control" id="subjectLine" required /><br></br>
                <label className="form-label">Your Message</label>
                <textarea className="form-control" id="yourMessage" rows="5" required></textarea><br></br>
            </div>
            <button type="submit" className="btn btn-lg me-4" style={Styles.buttonStyle}>Submit</button>
        </form>
    )
}

export default ContactForm;