import React from 'react';

export default class Question extends React.Component {

    render() {
        const questions = [
            'Roughly how long does the moon take to orbit the earth?',
            'What Does DNA stand for?',
            'Which Roman numeral represents 100?',
            'What is the most abundant element in the Universe?',
            'What is the phase change from solid to gas called?',
            'Who wrote the national anthem?',
            'What was the first Constitution of the US called?',
            'How many legs do arachnids have?',
            'What is the smallest prime number?',
            'Calories are a unit of what?'
        ];
        return (
            <div className='questionContainer'>
                <h3 className='questionText'>
                    {this.props.questionNumber + 1}. {questions[this.props.questionNumber]}
                </h3>
            </div>
        );
    }
}