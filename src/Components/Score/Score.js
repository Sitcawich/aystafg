import React from 'react';

export default function Score({ score, numAnswered }) {
    return (
        <div className='score-container'>
            <p className="score">Score: {score}/{numAnswered}</p>
        </div>
    );
}
