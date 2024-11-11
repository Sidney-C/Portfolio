import React from "react";

import Styles from "./styles.js";

function Portfolio() {
    return (
        <div>
            <h1>My Portfolio</h1><br></br>
            <a href="https://flashcards-frontend-lac.vercel.app/" style={Styles.linkStyle}><h2>🔗Language Flashcards</h2></a><br></br>
            <p>This is an educational full-stack CRUD app (Create, Read, Update, Delete) built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js) of technologies. Designed to assist in language learning, and suitable for all ages and levels of fluency, the user can create, read, update, and delete bilingual flashcards. They can then test themselves on these flashcards, having to translate words from their native language to their target language, or vice versa. While being tested, the user is provided with helpful information, such as a running total of right and wrong answers, and corrections whenever they make a mistake. Please note that the above link launches the app in a read-only demo mode, with the ability to add, edit and delete flashcards disabled for security reasons. However, it is still possible to view the flashcards, and attempt translation tests.</p><br></br>
            <a href="https://github.com/Sidney-C/Vite-React-Cleaner" style={Styles.linkStyle}><h2>🔗React.js Project Helper</h2></a><br></br>
            <p>This is a Python script that can be run from the terminal. Designed to make life easier for budding React developers, it removes the placeholder files spawned whenever a new Vite project is created, leaving only the simplest possible boilerplate. The user also has the option to include the Bootstrap framework in this boilerplate, saving even more time. All of this is handled in one line on the command line. It is freely available for download from GitHub.</p><br></br>
        </div>
    )
}

export default Portfolio;