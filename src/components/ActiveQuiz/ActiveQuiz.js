import React from 'react'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = () => (
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
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>

        </ul>
    </div>
)

export default ActiveQuiz