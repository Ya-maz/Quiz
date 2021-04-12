import React, {Component} from 'react'
import classes from './quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        results: {},
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {   question: 'Цвет твоих глаз?',
                rightAsnwerId: 4,
                id: 1,
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success'){
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAsnwerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState ({
                answerState: {[answerId]: 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })

                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

        }
        else {
            results[question.id] ='error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })

        }
    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }
    render()  {
        return(
            <div className={ classes.Quiz }>


                <div className={ classes.QuizWrapper }>
                    <h1>Ответьте на вопросы</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}

                            />
                    }
                </div>
            </div>
        )
    }
}
export default Quiz