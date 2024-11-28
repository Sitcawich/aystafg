import React from 'react';
import { useLocation, Link } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  // Determine iframe properties based on the score
  let iframeDetails = {
    width: "800",
    height: "400",
    src: "https://www.youtube.com/embed/DmH6YPWhaDY", // Default video
    title: "Galaxy Brain meme"
  };

  if (score <= 3) {
    iframeDetails = {
      width: "356",
      height: "380",
      src: "https://www.youtube.com/embed/ZVKCABOP5Rg",
      title: "Oh my god bruh"
    };
  } else if (score <= 6) {
    iframeDetails = {
      width: "300",
      height: "400",
      src: "https://www.youtube.com/embed/d8oA10w4h0A",
      title: "you shoulda payed attention in class you f$&amp;@ing bozo"
    };
  } else if (score <= 8) {
    iframeDetails = {
      width: "800",
      height: "400",
      src: "https://www.youtube.com/embed/_oGrE2vL61g",
      title: "Not Bad Not Bad Now You Meme Template"
    };
  }

  return (
    <div className="results-container">
      <h2 className="results-text">
        Thanks for playing! <br /> Here was your final score: {score}/10
      </h2>
      <Link to="/game" className="play-again-button">
        Play Again?
      </Link>
      <iframe
        width={iframeDetails.width}
        height={iframeDetails.height}
        src={iframeDetails.src}
        title={iframeDetails.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Results;
