import React from 'react'
//elements
import { Box, Button, Typography } from '@mui/material'
//img
import banner from '../assets/images/banner.png'

const Header = () => {
  return (
    <Box
        textTransform="capitalize"
        sx={{
            mt: { lg: '50px' , xs: '70px'},
            ml: { sm:'50px'}
        }}
        position="relative"
        p="200px"
    >
        <Typography
            color="#ff2625"
            fontWeight="600"
            fontSize="26px"
        >
            fitness club
        </Typography>
        <Typography
            fontWeight={700}
            sx={{ fontSize: {
                lg: '44px',
                xs: '40px'
            }}}
            my={"20px"}
        >
            sweat, smile <br /> and repeat
        </Typography>
        <Typography
            fontSize={22}
            lineHeight={"35px"}
            mb={2}
        >
            check out the most effective exercises
        </Typography>
        <Button
            variant='contained'
            color='error'
            href='#exercises'
            sx={{ 
                background: '#ff2625',
                padding: '10px',
                marginY: "20px"
            }}
            
        >
            Explore exercise
        </Button>
        <Typography
            fontSize={"200px"}
            color={"#ff2625"}
            sx={{
                opacity: '0.1',
                display: { lg: 'block' , xs: 'none'}
            }}
            fontWeight={600}
            
        >
            exercise
        </Typography>
        <img src={banner} alt="banner" className='hero-banner-img '/>
    </Box>
  )
}

export default Header