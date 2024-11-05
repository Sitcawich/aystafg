import React, { useState, useEffect } from 'react';
import Question from '../components/Question/Question';
import Answer from '../components/Answer/Answer';
import Score from '../components/Score/Score';
import Previous from '../components/Previous/Previous';
import RightButton from '../components/RightButton/RightButton';

const Game = () => {
    const [questionNum, setQuestionNum] = useState(0);
    const [score, setScore] = useState(() => {
      const savedScore = sessionStorage.getItem('score');
      return savedScore ? JSON.parse(savedScore) : 0;
    });
    const [numAnswered, setNumAnswered] = useState(0);
    const LENGTH = 10; 

    useEffect(() => {
      sessionStorage.setItem('score', JSON.stringify(score));
    }, [score]);
  
    // Functions to update state
    const changeQNum = (increment) => {
      const newQ = questionNum + increment;
      if (newQ >= 0 && newQ < LENGTH) {
        setQuestionNum(newQ);
      }
    };
  
    const incrementScore = () => {
      setScore(score + 1);
    };
  
    const incrementNumAnswered = () => {
      setNumAnswered(numAnswered + 1);
    };
  
    return (
      <div className="panel">
        <h3><Question questionNumber={questionNum} /></h3>
        <Answer
          questionNum={questionNum}
          incrementScore={incrementScore}
          incrementNumAnswered={incrementNumAnswered}
          numAnswered={numAnswered}
        />
        <div className="nav">
          <Previous onClick={() => changeQNum(-1)} />
          <Score numAnswered={numAnswered} score={score} />
          <RightButton
            onClick={() => changeQNum(1)}
            numAnswered={numAnswered}
            questionNum={questionNum}
            length={LENGTH}
          />
        </div>
      </div>
    );
  }

  export default Game;