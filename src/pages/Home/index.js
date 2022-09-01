import React from 'react'
import { Box, Grid, Paper } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2}>Filter Section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ height: '200vh' }}>
            List of movies
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{ height: '80vh', position: 'sticky', top: '12vh' }}
          >
            Selected movies
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
