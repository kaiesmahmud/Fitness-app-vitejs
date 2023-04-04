import React from 'react'
import { Stack, Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems={'center'}
        justifyContent={"center"}
        className='bodyPart-card'
        sx={{
            bgcolor: '#fff',
            width:'270px',
            height:'280px',
            cursor:"pointer",
            gap:'47px',
            borderBottomLeftRadius:'20px',
            borderTop:bodyPart === item ?'4px solid #ff2625': "none"
        }}
    >
        <img
            src={icon}
            alt='dummybel'
            className='body-part-icon w-[40px]' />

    </Stack>
  )
}

export default BodyPart