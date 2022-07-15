import React from 'react';

export default class AnswerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClass: [
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault',
                'answerTextDefault'
            ],
            correctList: [2, 0, 1, 0, 3, 2, 2, 1, 1, 3]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.numAnswered === this.props.questionNum) {
            if (this.props.answerNum === this.state.correctList[this.props.questionNum]) {
                // Make copy of state array, modify it, then setState w/ it
                let buttonClass = [...this.state.buttonClass];
                buttonClass[this.props.questionNum] = 'answerTextGreen';
                this.setState({ buttonClass: buttonClass });
                this.props.incrementScore();
            } else {
                let buttonClass = [...this.state.buttonClass];
                buttonClass[this.props.questionNum] = 'answerTextRed';
                buttonClass[this.state.correctList[this.props.questionNum]] = 'answerTextGreen';
                this.setState({ buttonClass: buttonClass });
            }
            this.props.incrementNumAnswered();
        }
    }

    render() {
        return (
            <button className={this.state.buttonClass[this.props.questionNum]}
                onClick={this.handleClick}>
                {this.props.answer}
            </button>
        );
    }
}