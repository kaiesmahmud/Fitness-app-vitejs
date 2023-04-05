import React, { useEffect, useState } from 'react'
//material ui elements
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
//Fetch Data from Utils
import { fetchData, exerciseOptions, url } from '../utils/fetchData';
import SlickSlider from './SlickSlider';

const Search = ({bodyPart, setBodyPart, setExercises}) => {
  //for storing user search value
  const [search, setSearch] = useState("");
 
  // for storing bodyparts name
  const [bodyParts, setBodyParts] = useState([])


  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${url}/bodyPartList`, exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
      console.log(bodyPartsData)
    }

    fetchExercisesData();
  },[])
  const handleSearch = async (e) => {
    if(search){
      const exercisesData = await fetchData(url, exerciseOptions)
      console.log(" data is ", exercisesData)

      const searchedExercises = exercisesData.filter(
        exercise => exercise.name.toLocaleLowerCase().includes(search) ||
        exercise.target.toLocaleLowerCase().includes(search) ||
        exercise.equipment.toLocaleLowerCase().includes(search) ||
        exercise.bodyPart.toLocaleLowerCase().includes(search) 
      )
      console.log(" filtered result is ", searchedExercises)

      setSearch("");
      setExercises(searchedExercises)
    }
  } 

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      mt="37px"
      p="20px"
      textTransform="capitalize"
    >
      <Typography
        fontWeight={700}
        mb={"50px"}
        textAlign={"center"}
        sx={{
          fontSize: { lg: '44px' , xs: '30px'}
        }}
      >

         exercises you should know
      </Typography>
      <Box
        position={"relative"}
        mb={"70px"}
      >
        <TextField 
          sx={{ 
            height: '76px',
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width:{
              lg: '800px',
              xs: '350px'
            },
            //  backgroundColor: '#fff',
            borderRadius: '40px'
            
        }}
          value={search}
          onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor:'#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px' , xs:'14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position:'relative',
          width: '100%',
          p: '20px'
        }}
      >
        <SlickSlider data={bodyParts} bodyPart={bodyPart}  setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default Search