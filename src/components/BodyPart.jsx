import React from 'react'
import { Stack, Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems={'center'}
        justifyContent={"center"}
        // className='bodyPart-card'
        className='shadow-lg'
        sx={{
            bgcolor: '#fff',
            width:{xs:"90%",sm:'200px', md:'80%', lg:'80%'},
            height:'280px',
            cursor:"pointer",
            gap:'47px',
            borderBottomLeftRadius:'20px',
            borderTop:bodyPart === item ?'4px solid #ff2625': "none"
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img
            src={icon}
            alt='dummybel'
            className='body-part-icon w-[40px]' />
        <p>{item}</p>
    </Stack>
  )
}

export default BodyPart