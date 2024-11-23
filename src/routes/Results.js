import React from 'react';
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;
  console.log("location score", location);

  if (score <= 3) {
    return (
      <div className = 'results-container'>
        <h2 className = 'results-text'>Thanks for playing! <br/> Here was your final score: {score}/10</h2>
        <iframe width="356" height="380" src="https://www.youtube.com/embed/ZVKCABOP5Rg" title="Oh my god bruh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
    )
  }
  else if (score <= 6) {
    return (
      <div className = 'results-container'>
        <h2 className = 'results-text'>Thanks for playing! <br/> Here was your final score: {score}/10</h2>
        <iframe width="300" height="400" src="https://www.youtube.com/embed/d8oA10w4h0A" title="you shoulda payed attention in class you f$&amp;@ing bozo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
        </div>
    )  
  }
  else if (score <= 8) {
    return (
      <div className = 'results-container'>
        <h2 className = 'results-text'>Thanks for playing! <br/> Here was your final score: {score}/10</h2>
        <iframe width="800" height="400" src="https://www.youtube.com/embed/_oGrE2vL61g" title="Not Bad Not Bad Now You Meme Template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      )  
  }
  return (
    <div className = 'results-container'>
      <h2 className = 'results-text'>Thanks for playing! <br/> Here was your final score: {score}/10</h2>
      <iframe width="800" height="400" src="https://www.youtube.com/embed/DmH6YPWhaDY" title="Galaxy Brain meme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
    </div>
  )
}

export default Results