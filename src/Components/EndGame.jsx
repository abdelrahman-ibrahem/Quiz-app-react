import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/QuizContext'

function EndGame() {
    const {score, setScore} = useContext(QuizContext);

  return (
    <div className='main endgame'>
       <h1>Game is end</h1>
       <p>Your score is: {score}</p>
    </div>
  )
}

export default EndGame