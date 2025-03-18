import React, { useEffect } from "react";
import { galleryPhotos, driveLink } from "../photos";
import "../styles/styles.css";

const Gallery = () => {
    useEffect(() => {
        // Load Instagram embed script dynamically
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="gallery">
            <h2>Memories in March - বসন্ত আর চেমতাবুরু - 2025</h2>

            {/* Gallery Photos Section */}
            <div className="gallery-grid">
                {galleryPhotos.map((photo, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={photo.src} alt={`Gallery ${index}`} />
                        <p>{photo.desc}</p>
                    </div>
                ))}
            </div>

            {/* Instagram Reel Section - Centered */}
            <div className="reel-section">
                <h3>Featured Reel</h3>
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/reel/DHWQsn6SAmd/?igsh=OWo5bzI2YjlzMW03"
                    data-instgrm-version="14"
                ></blockquote>
            </div>

            {/* Download Button */}
            <div className="download-button">
                <a href={driveLink} target="_blank" rel="noopener noreferrer">
                    📂 Download All Photos
                </a>
            </div>
        </div>
    );
};

export default Gallery;