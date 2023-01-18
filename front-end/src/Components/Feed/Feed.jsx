import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
const Feed = () => {
  return (
    <Stack sx={{
      flexDirection:'row'
    }}>
      <Box sx={{
        height: {
          sx:'auto',md:'92vh'
        },
        borderRight: '1px solid grey',
        px:5
      }}>

      </Box>
    </Stack>
  )
}

export default Feed