import React from 'react';

const Results = () => {
  return (
    <div className = 'results-container'>
      <h2 className = 'results-text'>Thanks for playing! <br/> Here was your final score: {sessionStorage.getItem("score")}/{sessionStorage.getItem("numAnswered")}</h2>
    </div>
    
  )
}

export default Results