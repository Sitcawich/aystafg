import React from 'react';
import AnswerButton from './AnswerButton';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerList: [
                ['1 year', '1 day', '1 month', '1 lightyear'],
                ['Deoxyribonucleic acid', 'Dinitronic acid', 'Deuterionucleic acid', 'Diuretic nuclear acid'],
                ['L', 'C', 'X', 'V'],
                ['Hydrogen', 'Nitrogen', 'Carbon', 'Helium'],
                ['Recombination', 'Deposition', 'Ionization', 'Sublimation'],
                ['Frederick Douglas', 'Jimmy Hendrix', 'Francis Scott Key', 'F. Scott Fitzgerald'],
                ['Constitution', 'Declaration of Independence', 'Articles of Confederation', 'Constitutional Amendment'],
                ['6', '8', '9', '10'],
                ['1', '2', '0', '3'],
                ['Heat Capacity', 'Force', 'Capacitance', 'Energy']
            ],
        };
    }

    render() {
        const answers = this.state.answerList[this.props.questionNum].map((answer, index) => {
            return (
                <AnswerButton className={this.state.buttonClass}
                    answerNum={index}
                    answer={answer}
                    questionNum={this.props.questionNum}
                    incrementScore={this.props.incrementScore}
                    numAnswered={this.props.numAnswered}
                    incrementNumAnswered={this.props.incrementNumAnswered} />
            )
        });

        return (
            <div className='answerContainer'>
                {answers}
            </div>
        );
    }
}