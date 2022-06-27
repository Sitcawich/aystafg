import React from 'react';

export default class Score extends React.Component {
    render() {
        return (<p className="score">Score: {this.props.score}/{this.props.numAnswered}</p>);
    }
}