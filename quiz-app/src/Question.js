import React from 'react';

export default class Question{
    state = {
        index: 0,
    };
    
    render(){
        const questions =['question1', 'question2', 'question3'];
        return(
            <div className = 'questionContainer'>
                <div className= 'questionText'>{questions[this.state.index]}</div>
            </div>
        );
    }
}