import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';
import Previous from './Previous';
import Next from './Next';
export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionNumber: 0,
            score: 0,
            scoreDenominator: 0
        };
    }

    render(){
        return(
            <div className = 'panel'>
                <div><Score 
                scoreDenominator = {this.state.scoreDenominator} 
                score={this.state.score} /></div>
                <h3>
                <Question questionNumber = {this.state.questionNumber} />
                </h3>
                <div><Answer 
                questionNumber = {this.state.questionNumber}
                setState = {p => {this.setState(p)}}
                score = {this.state.score}
                scoreDenominator = {this.state.scoreDenominator}/></div>
                <div className = 'navButtons'>
                    <Previous/>
                    <Next/>
                </div>
               
            </div>
        );
    }
}