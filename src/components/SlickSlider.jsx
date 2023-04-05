import React from 'react'
import Slider from 'react-slick';
//Components
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { Box } from '@mui/material';
//Slick Css for Carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../slick.css'
const SlickSlider = ({data, bodyPart, setBodyPart}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                // arrows: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
    <div>
        <Slider {...settings}>
        {
        data.map((item) => (
            <Box
                key={item.id || item}
                // itemId={item.id || item}
                // title={item.id || item}
                m="0 40px"
            >
                {data ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
            </Box>
        ))}
        </Slider>
    </div>
    // <div>
    //     <h2> Responsive </h2>
    //     <Slider {...settings} className='flex'>
    //       <div>
    //         <h3>1</h3>
    //       </div>
    //       <div>
    //         <h3>2</h3>
    //       </div>
    //       <div>
    //         <h3>3</h3>
    //       </div>
    //       <div>
    //         <h3>4</h3>
    //       </div>
    //       <div>
    //         <h3>5</h3>
    //       </div>
    //       <div>
    //         <h3>6</h3>
    //       </div>
    //       <div>
    //         <h3>7</h3>
    //       </div>
    //       <div>
    //         <h3>8</h3>
    //       </div>
    //     </Slider>
    //   </div>
  )
}

export default SlickSlider