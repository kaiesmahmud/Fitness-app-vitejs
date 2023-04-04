import { Route, Routes} from 'react-router-dom'
//Material UI
import Button from '@mui/material/Button';
import {Box} from '@mui/material'
//css
import './App.css'
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';

const App = () => {

  return (
    <Box width="400px" sx={{ width: { xl : '1488px'}}} m={"auto"}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
