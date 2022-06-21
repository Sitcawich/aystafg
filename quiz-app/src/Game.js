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

    // redundant code above just put <Question /> into the render method without creating helper methods

    render(){
        return(
            <div className = 'panel'>
                <h3>
                <Question questionNumber = {this.state.questionNumber}/>
                </h3>
                <div><Answer questionNumber = {this.state.questionNumber}/></div>
                <div><Score questionNumber = {this.state.questionNumber} score={this.state.score} /></div>
               
            </div>
        );
    }
}