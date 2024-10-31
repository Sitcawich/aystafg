import React, { useState } from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import Previous from '../Previous/Previous';
import Score from '../../Score';
import RightButton from '../RightButton/RightButton';

export default function Game() {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [numAnswered, setNumAnswered] = useState(0);
  const LENGTH = 10; 

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