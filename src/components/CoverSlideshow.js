import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { coverPhotos } from "../photos";
import "../styles/styles.css";

const CoverSlideshow = () => {
    return (
        <div className="cover-slideshow">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
                {coverPhotos.map((photo, index) => (
                    <div key={index}>
                        <img src={photo} alt={`Cover ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CoverSlideshow;