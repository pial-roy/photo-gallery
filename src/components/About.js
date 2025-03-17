import React from "react";
import "../styles/styles.css";

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>Hello! I'm Pial Roy, a mobile photography enthusiast x Developper capturing memories through my phone.</p>
            <div className="social-links">
                <a href="mailto:pialroy5@gmail.com">
                    📧 Email
                </a>
                <a href="https://www.linkedin.com/in/pialroy/" target="_blank" rel="noopener noreferrer">
                    🔗 LinkedIn
                </a>
                <a href="https://www.instagram.com/heee_who_remains/" target="_blank" rel="noopener noreferrer">
                    📸 Instagram
                </a>
            </div>
        </div>
    );
};

export default About;