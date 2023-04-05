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
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} = useParams();
  
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDetailData = await fetchData(`${url}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData)
      console.log("Fetch single data", exerciseDetailData)
      
      const videosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`,youTybeOptions);
      setExerciseVideos(videosData);
      console.log("Fetch single Exercise videos data", videosData)

    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos  exerciseVideos={exerciseVideos.contents} name={exerciseDetail.name} />
      <SimilarExerrcises />
    </Box>
  )
}

export default ExerciseDetails