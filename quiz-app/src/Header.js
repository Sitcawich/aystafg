import React from 'react';
import logo from './images/aystafg.jpg'

export default class Header extends React.Component{
    render(){
        return(
            <div className = 'header'>
                <img src = {logo} alt = 'logo'/>
                <h2>Are You Smarter Than A Fifth Grader?</h2>
                 
            </div>
        );
    }
}