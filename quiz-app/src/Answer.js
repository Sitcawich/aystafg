import React from 'react';

export default class Answer extends React.Component{

    render(){
    const answerList = [['Ur not that guy pal, trust me, ur not that guy', 'Answer2', 'Answer3'], ['Answer4', 'Answer5', 'Answer6'], ['Answer7', 'Answer8', 'Answer9']];
    const answers = answerList[this.props.questionNumber].map((answer) => 
    
        <button>
            {answer}
        </button>
    
    
    );
        return(
            <div className = 'answerContainer'>
                {answers}
            </div>
            
        );
    }
}