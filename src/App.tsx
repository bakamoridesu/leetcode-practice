import React from 'react';
import './App.css';
import cn from 'classnames'

import currentChallenge from './current'
import {testCases} from './current/tests'
import {name} from "./current/config";

function App() {
    return (
        <div className="App">
            <h1>Current challenge: {name}</h1>
            <Tests currentChallenge={currentChallenge} testCases={testCases}/>
        </div>
    );
}

// @ts-ignore
const Tests = ({testCases, currentChallenge}) => {
    return (
        <>
            {testCases.map((test: any, index: any) => {
                const testResult = currentChallenge(test.test)
                const isCorrect = testResult === test.answer
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
