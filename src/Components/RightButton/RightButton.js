import React from 'react';
import Next from '../Next/Next';


export default function RightButton ({ questionNum, length, handleClick, numAnswered, handleSubmit }) {
	return (
		questionNum !== length - 1 ? (
		  <Next onClick={handleClick} numAnswered={numAnswered} questionNum={questionNum} />
		) : (
			<button className = 'navButton' onClick={handleSubmit}>
				Submit
			</button>
		)
	);
}
