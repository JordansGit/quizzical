import React from 'react'

export default function Quiz(){

  return (
    <form>
      <div className="bg top-right-bg"></div>
      <div className="bg top-left-bg"></div>
      <div className="qna-block">
        <h2>How would one say goodbye in Spanish?</h2>
        <div className="answers">
          <input type="radio" name="question1" id="q1-a1" value="" />
          <label for="q1-a1">Adiós</label>
          <input type="radio" name="question1" id="q1-a2" value="" />
          <label for="q1-a2">Hola</label>
          <input type="radio" name="question1" id="q1-a3" value="" />
          <label for="q1-a3">Au Revoir</label>
          <input type="radio" name="question1" id="q1-a4" value="" />
          <label for="q1-a4">Salir</label>
        </div>
      </div>

      <div className="qna-block">
        <h2>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
        <div className="answers">
          <input type="radio" name="question2" id="q2-a1" value="" />
          <label for="q2-a1">Cabbage Patch Kids</label>
          <input type="radio" name="question2" id="q2-a2" value="" />
          <label for="q2-a2">Transformers</label>
          <input type="radio" name="question2" id="q2-a3" value="" />
          <label for="q2-a3">Care Bears</label>
          <input type="radio" name="question2" id="q2-a4" value="" />
          <label for="q2-a4">Rubik’s Cube</label>
        </div>
      </div>

      <div className="qna-block">
        <h2>What is the hottest planet in our Solar System?</h2>
        <div className="answers">
          <input type="radio" name="question3" id="q3-a1" value="" />
          <label for="q3-a1">Mercury</label>
          <input type="radio" name="question3" id="q3-a2" value="" />
          <label for="q3-a2">Venus</label>
          <input type="radio" name="question3" id="q3-a3" value="" />
          <label for="q3-a3">Mars</label>
          <input type="radio" name="question3" id="q3-a4" value="" />
          <label for="q3-a4">Saturn</label>
        </div>
      </div>

      <div className="qna-block">
        <h2>In which country was the caesar salad invented?</h2>
        <div className="answers">
          <input type="radio" name="question4" id="q4-a1" value="" />
          <label for="q4-a1">Italy</label>
          <input type="radio" name="question4" id="q4-a2" value="" />
          <label className="wide-label" for="q4-a2">Portugal</label>
          <input type="radio" name="question4" id="q4-a3" value="" />
          <label for="q4-a3">Mexico</label>
          <input type="radio" name="question4" id="q4-a4" value="" />
          <label className="wide-label" for="q4-a4">France</label>
        </div>
      </div>

      <div className="qna-block">
        <h2>How Many Hearts Does An Octopus Have?</h2>
        <div className="answers">
          <input type="radio" name="question5" id="q5-a1" value="" />
          <label for="q5-a1">One</label>
          <input type="radio" name="question5" id="q5-a2" value="" />
          <label for="q5-a2">Two</label>
          <input type="radio" name="question5" id="q5-a3" value="" />
          <label for="q5-a3">Three</label>
          <input type="radio" name="question5" id="q5-a4" value="" />
          <label for="q5-a4">Four</label>
        </div>
      </div>

      <button className="submit">Check Answers</button>
    </form>
  )
}