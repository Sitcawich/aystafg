import React from 'react';

export default class Previous extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(-1);
    }

    render() {
        return (
            <button className='navButton' onClick={this.handleClick}>
                &laquo; Previous
            </button>
        );
    }
}