import React from 'react';
import './App.css';
import cn from 'classnames'

import currentChallenge from './current'
import { testCases } from './current/tests'
import { name } from "./current/config";

function App() {
  return (
    <div className="App">
      <h1>Current challenge: {name}</h1>
      <Tests currentChallenge={currentChallenge} testCases={testCases}/>
    </div>
  );
}

// @ts-ignore
const Tests = ({ testCases, currentChallenge }) => {
  return (
    <>
      {testCases.map((test: any, index: any) => {
        // change these 2 lines based on test case structure
        const testResult = currentChallenge(test.test)
        // multi variable input:
        //const testResult = currentChallenge(...test.test)
        const isCorrect = testResult === test.answer
        // array output:
        // const isCorrect = testResult.join('') === test.answer.join('')

        return (
          <div key={index} className={cn('test', isCorrect ? 'passed' : 'failed')}>
            {`Test: ${test.test.toString()}, result: ${testResult}, correctAnswer: ${test.answer}`}
          </div>
        )
      })}
    </>
  )
}

export default App;
