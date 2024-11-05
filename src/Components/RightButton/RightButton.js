import React from 'react';
import Next from '../Next/Next';
import Submit from '../Submit/Submit';


export default function RightButton ({ questionNum, length, onClick, numAnswered }) {
	return (
		questionNum !== length - 1 ? (
		  <Next onClick={onClick} numAnswered={numAnswered} questionNum={questionNum} />
		) : (
		  <Submit />
		)
	  );
	}
