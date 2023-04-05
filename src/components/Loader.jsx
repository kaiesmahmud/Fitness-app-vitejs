import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack
        width={"100%"}
        direction={'row'}
        justifyContent={"center"}
        alignItems={"center"}
    >
        <InfinitySpin color='gray' />
    </Stack>
  )
}

export default Loader