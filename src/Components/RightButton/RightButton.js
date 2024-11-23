import React from 'react';
import Next from '../Next/Next';
import Submit from '../Submit/Submit';


export default function RightButton ({ questionNum, length, handleClick, numAnswered, handleSubmit }) {
	// necessary to have Next and Submit components?
	return (
		questionNum !== length - 1 ? (
		  <Next onClick={handleClick} numAnswered={numAnswered} questionNum={questionNum} />
		) : (
		  <Submit handleSubmit={handleSubmit} />
		)
	);
}
