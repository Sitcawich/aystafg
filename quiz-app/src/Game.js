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
            questionNum: 0,
            score: 0,
            numAnswered: 0,
            length: 3,
            hasAnswered: false
        };
        this.changeQNum = this.changeQNum.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
        this.changeAnswered = this.changeAnswered.bind(this);
        this.incrementNumAnswered = this.incrementNumAnswered.bind(this);
    }

    changeQNum(increment) {
        const newQ = this.state.questionNum + increment;
        if (newQ >= 0 && newQ < this.state.length) {
            this.setState({ questionNum: newQ });
        }
        if (newQ >= this.state.numAnswered) {
            this.setState({ hasAnswered: false });
        }
    }

    incrementScore() {
        this.setState({ score: this.state.score + 1 });
    }

    changeAnswered() {
        this.setState({ hasAnswered: true });
    }

    incrementNumAnswered() {
        this.setState({ numAnswered: this.state.numAnswered + 1 });
    }

    render() {
        return(
            <div className = 'panel'>
                <Score numAnswered = {this.state.numAnswered} 
                score={this.state.score} />
                <h3>
                    <Question questionNumber = {this.state.questionNum} />
                </h3>
                <Answer questionNum = {this.state.questionNum}
                hasAnswered={this.state.hasAnswered}
                incrementScore={this.incrementScore}
                changeAnswered={this.changeAnswered}
                incrementNumAnswered={this.incrementNumAnswered} />
                
                <div className = 'navButtons'>
                    <Previous onClick={this.changeQNum} />
                    <Next onClick={this.changeQNum} hasAnswered={this.state.hasAnswered} />
                </div>
            </div>
        );
    }
}