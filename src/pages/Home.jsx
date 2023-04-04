import React from 'react'
import { Box } from '@mui/material'
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