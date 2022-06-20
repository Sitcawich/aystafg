import React from 'react';

export default class Question extends React.Component{
    
    render(){
        const questions =['question1', 'question2', 'question3'];
        return(
            <div className = 'questionContainer'>
                <h3 className= 'questionText'>{questions[this.props.questionNumber]}</h3>
            </div>
        );
    }
}