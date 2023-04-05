import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Slider from 'react-slick';

//Slick Css for Carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../slick.css'


const ExerciseVideos = ({exerciseVideos, name}) => {
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
          slidesToScroll: 1
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
        <Slider {...settings} className='p-10 mx-10' >
        {
          exerciseVideos?.slice(0,6).map((item,index)=>(
            <a
              key={index} 
              href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
              target='_blank'
              rel='noreferrer'
              className='exercise-video p-2'
              >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} className='w-full' />
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
        </Slider>
    </Box>

  )
}

export default ExerciseVideos