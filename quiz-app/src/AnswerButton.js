import React from 'react';

var i = 0;

export default class AnswerButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            buttonClass: 'answerTextDefault',
            correctList: [2, 0, 1]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(i===0){
            if(this.props.answerNumber === this.state.correctList[this.props.questionNumber]){
                this.setState({buttonClass: 'answerTextGreen'})
             }
             else{
                 this.setState({buttonClass: 'answerTextRed'})
             }
        }
        i++;
        
    }

    render(){
        return(
            <button className = {this.state.buttonClass} onClick = {this.handleClick}>
                {this.props.answer}
            </button>
        );
    }

}