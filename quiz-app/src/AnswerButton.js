import React from 'react';

export default class AnswerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClass: 'answerTextDefault',
            correctList: [2, 0, 1],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.props.hasAnswered) {
            if (this.props.answerNum === this.state.correctList[this.props.questionNum]) {
                this.setState({ buttonClass: 'answerTextGreen' });
                this.props.incrementScore();
            } else {
                this.setState({buttonClass: 'answerTextRed'});
            }
            this.props.changeAnswered();
            this.props.incrementNumAnswered();
        }
    }

    render(){
        return(
            <button className = {this.state.buttonClass} onClick = {this.handleClick}>
                {this.props.answer}
            </button>
        );
    }
}