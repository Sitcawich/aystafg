import React from 'react';

export default class Score extends React.Component {
    render() {
        return (
            <div className = 'score-container'>
                <p className="score">Score: {this.props.score}/{this.props.numAnswered}</p>
            </div>
            
        );
    }
}
