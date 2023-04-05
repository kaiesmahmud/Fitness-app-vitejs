import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box
      textTransform={"capitalize"}
      sx={{
        marginTop: { lg: '200px', xs: '20px'}
      }}
      p="20px"
    >
      <Typography
        variant='h4'
        mb={"33px"}
      >
        Watch <span className='text-[#ff2625] '>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={'wrap'}
        alignItems={"center"}
        sx={{
          flexDirection: { lg: 'row'},
          gap: { lg: '110px', xs: '0'}  
        }}
      >
        {
          exerciseVideos?.slice(0,6).map((item,index)=>(
            <a
              key={index} 
              href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
              target='_blank'
              rel='noreferrer'
              className='exercise-video'
              >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                  <Typography
                    variant="h5" 
                    color="#000"
                  >
                    {item.video.title}
                  </Typography>
                  <Typography
                    variant="h6" 
                    color="#000"
                  >
                    {item.video.channelName}
                  </Typography>
                </Box>



            </a>
          ))
        }
      </Stack>
    </Box>

  )
}

export default ExerciseVideos