import React from 'react';
import Question from '../Question';
import Answer from '../Answer';
import Score from '../Score';
import Previous from '../Previous';
import RightButton from '../RightButton';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNum: 0,
            score: 0,
            numAnswered: 0,
            length: 10,
        };
        this.changeQNum = this.changeQNum.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
        this.incrementNumAnswered = this.incrementNumAnswered.bind(this);
    }
    

    changeQNum(increment) {
        const newQ = this.state.questionNum + increment;
        if (newQ >= 0 && newQ < this.state.length) {
            this.setState({ questionNum: newQ });
        }
    }

    incrementScore() {
        this.setState({ score: this.state.score + 1 });
        sessionStorage.setItem("score", this.state.score + 1);
    }

    incrementNumAnswered() {
        this.setState({ numAnswered: this.state.numAnswered + 1 });
        sessionStorage.setItem("numAnswered", this.state.numAnswered + 1);
    }

    render() {
        return (
            <div className='panel'>
                <h3><Question questionNumber={this.state.questionNum} /></h3>
                <Answer questionNum={this.state.questionNum}
                    incrementScore={this.incrementScore}
                    incrementNumAnswered={this.incrementNumAnswered}
                    numAnswered={this.state.numAnswered} />
                <div className='nav'>
                    <Previous onClick={this.changeQNum} />
                    <Score numAnswered={this.state.numAnswered}
                        score={this.state.score} />
                    <RightButton onClick={this.changeQNum}
                        numAnswered={this.state.numAnswered}
                        questionNum={this.state.questionNum}
                        length={this.state.length} />
                </div>
            </div>
        );
    }
}