import React from 'react';

export default class Answer extends React.Component{
    render(){
        const answerList = [['1 year', '1 day', '1 month'], 
        ['deoxyribonucleic acid', 'dinitronic acid', 'deuterionucleic acid'], ['L', 'C', 'X']];
        const correct = [1, 0, 1];
        const answers = answerList[this.props.questionNumber].map((answer) => 
            <button className = 'answerText'>
                {answer}
            </button>
        );

        return(
            <div className = 'answerContainer'>
                {answers}
            </div>
        );
    }
}