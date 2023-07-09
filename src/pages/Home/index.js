import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import { MovieCard } from '../../components'

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2}>Filter Section</Paper>
        </Grid>
        <Grid item xs={12} md={8} sx={{ mt: 2 }}>
          <Paper elevation={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((i) => (
                  <Grid key={i} item xs={12} md={6} lg={3}>
                    <MovieCard />
                  </Grid>
                ))}
              </Grid>{' '}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{ height: '80vh', position: 'sticky', top: '2vh' }}
          >
            Selected movies
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
