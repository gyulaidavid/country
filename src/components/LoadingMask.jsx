import React from 'react'
import { Box, CircularProgress} from '@mui/material/'

function LoadingMask() {
  return (
    <Box >
    Loading
    <br />
    <CircularProgress />
  </Box>
  )
}

export default LoadingMask