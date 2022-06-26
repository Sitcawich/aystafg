import React from 'react';

export default class AnswerButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonClass: 'answerTextDefault',
            correctList: [2, 0, 1],
            isClicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if (!this.props.hasAnswered) {
            if (this.props.answerNumber === this.state.correctList[this.props.questionNumber]) {
                this.setState({ buttonClass: 'answerTextGreen' });
                this.props.setGameState({ score: this.props.score + 1 });
            } else {
                this.setState({buttonClass: 'answerTextRed'});
            }
            this.props.setGameState({ 
                questionsAnswered: this.props.questionsAnswered + 1,
                hasAnswered: true 
            });
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