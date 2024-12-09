import { useState } from "react";
import Main from "./Components/Main";
import Quiz from "./Components/Quiz";
import EndGame from "./Components/EndGame";
import { QuizContext } from "./Helpers/QuizContext";
import './App.css'

function App() {
  const [gameState, setGameState] = useState("main")
  const [score, setScore] = useState(0)
  return (
    <div className="container">
      <h1>Start Your Quiz</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "main" && <Main />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endgame" && <EndGame />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
