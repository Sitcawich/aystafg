import React from 'react';
import Question from './Question';
import Answer from './Answer';
export default class Game extends React.Component{
    render(){
        return(
            <div className = 'panel'>
                <div className = 'questionContainer'>
                    <h1>Question 1: What would you do?</h1>
                </div>
               
            </div>
        );
    }
}