import React from 'react';
import AnswerButton from '../../AnswerButton';

export default function Answer({ questionNum, incrementScore, numAnswered, incrementNumAnswered }) {
  const answerList = [
    ['1 year', '1 day', '1 month', '1 lightyear'],
    ['Deoxyribonucleic acid', 'Dinitronic acid', 'Deuterionucleic acid', 'Diuretic nuclear acid'],
    ['L', 'C', 'X', 'V'],
    ['Hydrogen', 'Nitrogen', 'Carbon', 'Helium'],
    ['Recombination', 'Deposition', 'Ionization', 'Sublimation'],
    ['Frederick Douglas', 'Jimmy Hendrix', 'Francis Scott Key', 'F. Scott Fitzgerald'],
    ['Constitution', 'Declaration of Independence', 'Articles of Confederation', 'Constitutional Amendment'],
    ['6', '8', '9', '10'],
    ['1', '2', '0', '3'],
    ['Heat Capacity', 'Force', 'Capacitance', 'Energy']
  ];

  const answers = answerList[questionNum].map((answer, index) => (
    <AnswerButton
      key={index}
      answerNum={index}
      answer={answer}
      questionNum={questionNum}
      incrementScore={incrementScore}
      numAnswered={numAnswered}
      incrementNumAnswered={incrementNumAnswered}
    />
  ));

  return <div className="answerContainer">{answers}</div>;
}