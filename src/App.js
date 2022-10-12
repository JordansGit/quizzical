import React from 'react';
import Main from './components/Main'
import Quiz from './components/Quiz'

function App() {
  const [quizStarted, setQuizStarted] = React.useState(false)

  function startQuiz() {
    setQuizStarted(true)
  }

  return (
    <div className="container">
      {!quizStarted && <Main startQuiz={startQuiz} />}
      {quizStarted && <Quiz />}
    </div>
  );
}

export default App;
