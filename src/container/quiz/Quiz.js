import React, {Component} from 'react'
import classes from './quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {   question: 'Цвет твоих глаз?',
                rightAsnwerId: 4,
                id: 2,
                answers: [
                    {text: 'Голубой', id: 1},
                    {text: 'Желтый', id: 2},
                    {text: 'Зеленый', id: 3},
                    {text: 'Карие', id: 4},
                    {text: 'Черный', id: 5}
                ]
            },
            {   question: 'Сколько дней в обычном году?',
                rightAsnwerId: 2,
                id: 2,
                answers: [
                    {text: 365, id: 1},
                    {text: 364, id: 2},
                    {text: 366, id: 3},
                    {text: 360, id: 4},
                    {text: 363, id: 5}
                    ]

            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId)

        this.setState ({
            activeQuestion: this.state.activeQuestion +1
        })
    }

    render()  {
        return(
            <div className={ classes.Quiz }>


                <div className={ classes.QuizWrapper }>
                    <h1>Ответьте на вопросы</h1>
                    <ActiveQuiz
                        answers={ this.state.quiz[this.state.activeQuestion].answers }
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}
export default Quiz