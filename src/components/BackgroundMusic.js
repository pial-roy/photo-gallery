import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
                document.removeEventListener("click", playAudio);
            }
        };

        document.addEventListener("click", playAudio);

        return () => document.removeEventListener("click", playAudio);
    }, []);

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src={process.env.PUBLIC_URL + "/music/background.mp3"} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default BackgroundMusic;
