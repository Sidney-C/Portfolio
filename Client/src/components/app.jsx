import React, { useState } from "react";

import Header from "./header.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx";
import Contact from "./contact.jsx";

import Styles from "./styles.js";

function App() {

    const [showing, setShowing] = useState("about");

    function changePage(page) {
        const newPage = page; 
        setShowing(newPage);
    }

    return (
        <div>
            <Header changePage = {changePage} />
            <div style={Styles.mainStyle}>
                {showing == "about" && <About />}
                {showing == "portfolio" && <Portfolio />}
                {showing == "contact" && <Contact />}
            </div>
        </div>
    )
}

export default App;