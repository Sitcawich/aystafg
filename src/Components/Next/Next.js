import React from 'react';

export default function Next({ numAnswered, questionNum, onClick }) {
    const handleClick = () => {
        // have to answer question before seeing next question
        if (numAnswered > questionNum) {
            onClick();
        }
    }

    return (
        <button className='navButton' onClick={handleClick}>
            Next &raquo;
        </button>
    );
}