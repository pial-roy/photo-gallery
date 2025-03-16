import React from "react";
import { galleryPhotos, driveLink } from "../photos";
import "../styles/styles.css";

const Gallery = () => {
    return (
        <div className="gallery">
            <h2>Memories in March - বসন্ত আর চেমতাবুরু - 2025</h2>
            <div className="gallery-grid">
                {galleryPhotos.map((photo, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={photo.src} alt={`Gallery ${index}`} />
                        <p>{photo.desc}</p>
                    </div>
                ))}
            </div>
            <div className="download-button">
                <a href={driveLink} target="_blank" rel="noopener noreferrer">
                    📂 Download All Photos
                </a>
            </div>
        </div>
    );
};

export default Gallery;