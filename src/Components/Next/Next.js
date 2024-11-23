import React from 'react';

export default function Next({ numAnswered, questionNum, onClick }) {
    // necessary?
    const handleClick = () => {
        if (numAnswered > questionNum) {
            onClick(1);
        }
    }

    return (
        <button className='navButton' onClick={handleClick}>
            Next &raquo;
        </button>
    );
}