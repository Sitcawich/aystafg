import React from 'react';

export default class Score extends React.Component {
    render() {
        return (<p>{this.props.score}/{this.props.questionNumber}</p>);
    }
}