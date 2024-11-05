import React from 'react';

export default function Previous({ onClick }) {
    const handleClick = () => onClick(-1);

    return (
        <button className='navButton' onClick={handleClick}>
            &laquo; Previous
        </button>
    );
}