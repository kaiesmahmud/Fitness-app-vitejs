import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//utils
import { exerciseOptions, fetchData, url, youTybeOptions, youtubeUrl } from '../utils/fetchData'
//elements
import { Box } from '@mui/material'
//components
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExerrcises from '../components/SimilarExerrcises'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams();
  
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDetailData = await fetchData(`${url}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData)
      console.log("Fetch single data", exerciseDetailData)
    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExerrcises />
    </Box>
  )
}

export default ExerciseDetails