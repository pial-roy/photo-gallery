import React from "react";
import CoverSlideshow from "./components/CoverSlideshow";
import Gallery from "./components/Gallery";
import About from "./components/About";
import "./styles/styles.css";

function App() {
    return (
        <div className="app">
            <CoverSlideshow />
            <Gallery />
            <About />
        </div>
    );
}

export default App;