import React from 'react';
import AnswerButton from './AnswerButton';

export default class Answer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answerList: [['1 year', '1 day', '1 month'], 
        ['deoxyribonucleic acid', 'dinitronic acid', 'deuterionucleic acid'], ['L', 'C', 'X']],
        };
    }

    render(){
        const answers = this.state.answerList[this.props.questionNum].map((answer, index) => {
            return (
                <AnswerButton 
                className={this.state.buttonClass}
                answerNum={index}
                answer = {answer}
                questionNum = {this.props.questionNum}
                hasAnswered = {this.props.hasAnswered}
                incrementScore = {this.props.incrementScore}
                changeAnswered = {this.props.changeAnswered}
                incrementNumAnswered = {this.props.incrementNumAnswered} />
            ) 
        });

        return(
            <div className = 'answerContainer'>
                {answers}
            </div>
        );
    }
}