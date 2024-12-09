import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/QuizContext'

function Quiz() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is the capital of Russia?",
            options: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
            answer: "Moscow"
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {gameState, setGameState, score, setScore} = useContext(QuizContext);

    const handleNextQuestion = (value) => {
        if (value == questions[currentQuestion].answer){
            setScore(score + 1)
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setGameState('endgame')
        }
        // setCurrentQuestion(currentQuestion + 1)
    }
    
  return (
    <div className='main quiz'>
        <h1>{questions[currentQuestion].question}</h1>
        {questions[currentQuestion].options.map((option, index) => (
            <button className='btn' key={index} onClick={() => handleNextQuestion(option)}>{option}</button>
        ))}
    </div>
  )
}

export default Quiz