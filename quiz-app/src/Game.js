import React from 'react';
import Question from './Question';
import Answer from './Answer';
export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionNumber: 0,
        };
    }

    renderQuestion(){
        return(
            <Question questionNumber = {this.state.questionNumber}/>
        );
    }
    renderAnswer(){
        return(
            <Answer questionNumber = {this.state.questionNumber}/>
        );
    }
    render(){
        return(
            <div className = 'panel'>
                <h3>
                    {this.renderQuestion()}
                </h3>
                <div>{this.renderAnswer()}</div>
                
               
            </div>
        );
    }
}