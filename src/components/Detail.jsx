import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
//images
import bodypartimage from '../assets/icons/body-part.png'
import targetImg from '../assets/icons/target.png'
import equipmentimg from '../assets/icons/equipment.png'


const Detail = ({exerciseDetail: {name, target, bodyPart, gifUrl, equipment}}) => {
  const extraDetail = [
    {
      icon: bodypartimage,
      name: bodyPart
    },
    {
      icon: targetImg,
      name: target
    },
    {
      icon: equipmentimg,
      name: equipment
    },
  ]
  
  return (
    <Stack
      gap={'60px'}
      sx={{
        flexDirection: { lg: 'row'},
        p: "20px",
        alignItems: "center"
      }}
      textTransform={"capitalize"}
    >
      <img src={gifUrl} alt={name} loading='lazy'
        className='detail-image'
      />
      <Stack
        sx={{ gap: { lg:'35px' , xs: '20px'}}}
      >
        <Typography
          variant='h4'
        >
          {name}
        </Typography>
        <Typography>
          Exercises keep you strong. {name} is one of the best 
          exercises to target your abs. It will help you improve your mood and gain energy.
        </Typography>

        {
          extraDetail.map( (item) => (
            <Stack
             key={item.name}
             direction={"row"}
             gap={"24px"}
             alignItems={"center"}
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: '50%',
                  width:'100px',
                  height: '100px'
              }}
              >
                <img src={item.icon} alt={item.name} className='w-[50px]' />
              </Button>
              <Typography
                variant='h5'
              >
                {item.name}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Detail