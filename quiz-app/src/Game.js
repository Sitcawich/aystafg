import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';
export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionNumber: 0,
            score: 0
        };
    }
    // unnecessary

    // renderQuestion(){
    //     return(
    //         <Question questionNumber = {this.state.questionNumber}/>
    //     );
    // }
    // renderAnswer(){
    //     return(
    //         <Answer questionNumber = {this.state.questionNumber}/>
    //     );
    // }
    // renderScore() {
    //     return (
    //         <Score questionNumber = {this.state.questionNumber} score={this.state.score} />
    //     );
    // }
    render(){
        return(
            <div className = 'panel'>
                <div><Score questionNumber = {this.state.questionNumber} score={this.state.score} /></div>
                <h3>
                <Question questionNumber = {this.state.questionNumber} />
                </h3>
                <div><Answer questionNumber = {this.state.questionNumber} /></div>
                
               
            </div>
        );
    }
}