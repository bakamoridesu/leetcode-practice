import React from 'react';
import './App.css';
import cn from 'classnames'

import CurrentChallenge from './current'
import { testCases } from './current/tests'
import {name} from "./current/config";
function App() {
  return (
    <div className="App">
      <h1>Current challenge: {name}</h1>
      {testCases.map((test, index) => {
        const testResult = CurrentChallenge(test.test)
        const isCorrect = testResult === test.answer
        return (
          <div key={index} className={cn('test', isCorrect ? 'passed' : 'failed')}>
            {`Test: ${test.test}, result: ${testResult}, correctAnswer: ${test.answer}`}
          </div>
        )
      })}
    </div>
  );
}

export default App;
