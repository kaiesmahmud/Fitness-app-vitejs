import React from 'react'
//Elements
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
//images
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
     className=' capitalize'
     direction={'row'}
     justifyContent={"space-around"}
     sx={{gap : { sm: '122px', xs: '40px',
          mt:{ sm: '32px', xs: '20px'},
          justifyContent: 'none'
    }}}
    px={'20px'}
    >
        <Link to={'/'}>
            <img src={Logo} alt="Logo" className='w-[40px]' />
        </Link>
        <Stack
          direction={'row'}
          gap={'40px'}
          fontSize={"24px"}
          alignItems={'flex-end'}
        >
          <Link to={'/'}>Home</Link>
          <a href="#exercise" className='text-[#3a1212'>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar