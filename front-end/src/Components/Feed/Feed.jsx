import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from '../SideBar/SideBar'
import '../Feed/Styles.css';
const Feed = () => {
  return (
    <Stack sx={{
      flexDirection:'row'
    }}>
      <Box sx={{
        height: {
          sx:'auto',md:'auto'
        },
        borderRight: '1px solid grey',
        px:2
      }}>
        <SideBar/>
        <Typography
        className='copyright'
        variant='body2'
        sx={{
          mt:2,
          color:'white'
        }}
        >
          Copyright 2023 Codamy
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed