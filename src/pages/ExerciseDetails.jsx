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
  const {id} = useParams();
  // For Selected Exercise Details
  const [exerciseDetail, setExerciseDetail] = useState({})
  // For Youtube search results api
  const [exerciseVideos, setExerciseVideos] = useState([])
  // For targeted Muscles more api
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  // For equipments more api
  const [equipmentExercises, setEquipmentExercises] = useState([])
  // --------------------------------------------------------------------------------------------------------------------
  useEffect(()=>{
    window.scrollTo({ top: "0", behavior: 'smooth' });
    const fetchExercisesData = async ()=>{
      //===============specific exercise data fetching================================================================
      const exerciseDetailData = await fetchData(`${url}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData)
      console.log("Fetch single data", exerciseDetailData)
      //===========Youtube videos api data fetching====================================================================
      const videosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`,youTybeOptions);
      setExerciseVideos(videosData);
      console.log("Fetch single Exercise videos data", videosData)
      
      //=====similar target Muscle Exercises Data  fetching=============================================================
      const targetMuscleExercisesData = await fetchData(`${url}/target/${exerciseDetailData.target}`, exerciseOptions);
      console.log("Fetch similar TargetMuscle Exercise data", targetMuscleExercisesData)
      setTargetMuscleExercises(targetMuscleExercisesData)
      //=====similar equipment Exercises Data fetching===================================================================
      const equipmentExercisesData = await fetchData(`${url}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      console.log("Fetch similar equipment Exercises Data", equipmentExercisesData)
      setEquipmentExercises(equipmentExercisesData)
    }
    fetchExercisesData()
  },[id])
    // --------------------------------------------------------------------------------------------------------------------

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos  exerciseVideos={exerciseVideos.contents} name={exerciseDetail.name} />
      <SimilarExerrcises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails