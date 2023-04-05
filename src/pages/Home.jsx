import React, { useState } from 'react'
//elements
import { Box } from '@mui/material'
//components
import Header from '../components/Header'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

const Home = () => {
   // for storing user search value fetch results
   const [exercises, setExercises] = useState([])
   //for specifit body part
   const [bodyPart, setBodyPart] = useState("all")
  return (
    <div>
      <Header />
      <Search  
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises} 
      />
    </div>
  )
}

export default Home