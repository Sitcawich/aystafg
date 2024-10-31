import React from 'react';

const Results = () => {
  let score = sessionStorage.getItem("score");
  if (score === null){
    score = 0;
  }
  return (
    <div className = 'results-container'>
      <h2 className = 'results-text'>Thanks for playing! <br/> Here was your final score: {score}/{sessionStorage.getItem("numAnswered")}</h2>
    </div>
    
  )
}

export default Results