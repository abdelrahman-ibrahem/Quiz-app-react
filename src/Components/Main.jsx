import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/QuizContext'

function Main() {
    const { gameState, setGameState} = useContext(QuizContext);

    const handleStartQuiz = () => {
        setGameState("quiz")
    }
  return (
    <div className='main'>
        <button className="btn" onClick={handleStartQuiz}>
            Start Quiz
        </button>
    </div>
  )
}

export default Main