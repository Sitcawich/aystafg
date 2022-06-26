import React from 'react';

export default class Question extends React.Component{
    
    render(){
        const questions = ['Roughly how long does the moon take to orbit the earth?', 
        'What Does DNA stand for?', 'Which Roman numeral represents 100?'];
        return(
            <div className = 'questionContainer'>
                <h3 className= 'questionText'>
                    {this.props.questionNumber + 1}. {questions[this.props.questionNumber]}
                </h3>
            </div>
        );
    }
}