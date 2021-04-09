import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = (props) => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>
                    2.
                </strong>&nbsp;
                Как дела?
            </span>
            <small>3 из 12</small>
        </p>

        <AnswerList
            answers={props.answers}
        />
    </div>
)

export default ActiveQuiz
