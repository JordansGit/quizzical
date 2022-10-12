import React from 'react'

export default function Main(props) {
  return (
    <main>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="start-quiz" onClick={props.startQuiz}>Start Quiz</button>
    </main>
  )
}