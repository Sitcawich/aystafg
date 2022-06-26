import React from 'react';

export default class Next extends React.Component{
    handleClick() {
        this.props.onClick(1);
    }
    
    render(){
        return(
            <button className = 'nextButton' onClick={this.handleClick}>
                Next &raquo;
            </button>
        );
    }
}