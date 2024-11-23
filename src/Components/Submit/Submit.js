import React from 'react';


export default function Submit({ handleSubmit }) {
    return(
        <button className = 'navButton' onClick={handleSubmit}>
            Submit
        </button>
    );
}