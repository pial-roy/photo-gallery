import React from "react"; 
import CoverSlideshow from "./components/CoverSlideshow";
import Gallery from "./components/Gallery";
import About from "./components/About";
import BackgroundMusic from "./components/BackgroundMusic"; // Import background music component
import "./styles/styles.css";

function App() {
    return (
        <div className="app">
            <BackgroundMusic />
            <CoverSlideshow />
            <Gallery />
            <About />
        </div>
    );
}

export default App;
