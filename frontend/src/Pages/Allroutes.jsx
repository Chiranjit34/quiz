import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Quiz } from './Quiz'
import {Result} from './Result'

export const Allroutes = () => {
  let [a,seta]=useState(0)
  let [score,setScore]=useState(0)
  let [tital,settital]=useState(0)
  
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quiz" element={<Quiz setScore={setScore}
          score={score}
          a={a}
          settital={settital}

          seta={seta} />}/>
        <Route path="/results" element={<Result score={score}
        tital={tital}
          a={a}/>}/>
    </Routes>
  )
}
