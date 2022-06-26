import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';
import Previous from './Previous';
import Next from './Next';
export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            score: 0,
            questionsAnswered: 0,
            length: 3,
            hasAnswered: false
        };
        this.changeQuestion = this.changeQuestion.bind(this);
    }

    changeQuestion(increment) {
        const newQ = this.state.questionNumber + increment;
        if (newQ >= 0 && newQ < this.state.length) {
            this.setState({ questionNumber: newQ });
        }
        if (newQ >= this.state.questionsAnswered) {
            this.setState({ hasAnswered: false });
        }
    }

    render() {
        return(
            <div className = 'panel'>
                <Score questionsAnswered = {this.state.questionsAnswered} 
                score={this.state.score} />
                <h3>
                    <Question questionNumber = {this.state.questionNumber} />
                </h3>
                <Answer questionNumber = {this.state.questionNumber}
                setState = {p => {this.setState(p)}} // bad style?
                score = {this.state.score}
                questionsAnswered = {this.state.questionsAnswered}
                hasAnswered={this.state.hasAnswered} />
                
                <div className = 'navButtons'>
                    <Previous onClick={this.changeQuestion} />
                    <Next onClick={this.changeQuestion} hasAnswered={this.state.hasAnswered} />
                </div>
            </div>
        );
    }
}