import React, { useState } from 'react';

export default function AnswerButton ({ numAnswered, questionNum, answerNum, incrementNumAnswered, incrementScore, answer }) {
    const [buttonClass, setButtonClass] = useState(Array(10).fill('answerTextDefault'));
    const correctList = [2, 0, 1, 0, 3, 2, 2, 1, 1, 3];

    const handleClick = () => {
        if (numAnswered === questionNum) {
            const newButtonClass = [...buttonClass];
            if (answerNum === correctList[questionNum]) {
                newButtonClass[questionNum] = 'answerTextGreen';
                incrementScore();
            } else {
                newButtonClass[questionNum] = 'answerTextRed';
            }
            setButtonClass(newButtonClass);
            incrementNumAnswered();
        }
    }

    return (
        <button className={buttonClass[questionNum]} onClick={handleClick}>
            {answer}
        </button>
    );
}