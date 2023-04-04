import React from 'react'
//elements
import { Box } from '@mui/material'
//components
import Header from '../components/Header'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Exercises/>
    </div>
  )
}

export default Home