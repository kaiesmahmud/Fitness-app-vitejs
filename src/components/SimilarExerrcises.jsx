import React from 'react'
import Slider from 'react-slick';
import { Box, Stack, Typography } from '@mui/material'
//components
import Loader from './Loader'
import ExerciseCard from './ExerciseCard'
import Exercises from './Exercises'

//Slick Css for Carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../slick.css'


const SimilarExerrcises = ({equipmentExercises, targetMuscleExercises}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Box sx={{mt:{ lg: '100px' ,xs: "0"}}}>
      <Typography variant='h4'>
        Exercises that Target the same Muscle Group
      </Typography>
      {
        !targetMuscleExercises.length && <Loader />
      }
      <Slider {...settings} className='p-10 mx-10'>
        {
        targetMuscleExercises.map((exercise, i) => (<ExerciseCard key={i} exercise={exercise} /> ))
        }
      </Slider>
      <Typography variant='h4'>
        Equipments  that Target the same Exercises 
      </Typography>
      {
        !equipmentExercises.length && <Loader />
      }
     
      <Slider {...settings} className='p-10 mx-10'>
        {
        equipmentExercises.map((exercise, i) => (<ExerciseCard key={i} exercise={exercise} /> ))
        }
      </Slider>
      
    </Box>
  )
}

export default SimilarExerrcises