import React from 'react';

const Results = () => {
  return (
    <div className = 'results-container'>
      <h1>Were You Smarter Than a Fifth Grader? Here is your final score: {sessionStorage.getItem("score")}/{sessionStorage.getItem("numAnswered")}</h1>
      
    </div>
    
  )
}

export default Results