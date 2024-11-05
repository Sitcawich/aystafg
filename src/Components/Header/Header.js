import React from 'react';
import logo from '../../assets/images/aystafg.jpg'

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <h2 className='header-text'>Are You Smarter Than A 5<sup>th</sup> Grader?</h2>
        </div>
    );
}