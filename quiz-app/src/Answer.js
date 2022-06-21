import React from 'react';

export default class Answer extends React.Component{
    render(){
        const answerList = [['Ur not that guy pal, trust me, ur not that guy', '1 day', '1 month'], 
        ['deoxyribonucleic acid', 'dinitronic acid', 'deuterionucleic acid'], ['L', 'C', 'X']];
        
        const answers = answerList[this.props.questionNumber].map((answer) => 
            <button>
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