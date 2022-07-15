import React from 'react';
import { Link } from 'react-router-dom';
import Next from './Next';
import Submit from './Submit';


export default class RightButton extends React.Component {
	render() {
		if (this.props.questionNum !== this.props.length - 1) {
			return (<Next onClick={this.props.onClick}
				numAnswered={this.props.numAnswered}
				questionNum={this.props.questionNum} />);
		}
		return <Submit />;
	}
}
