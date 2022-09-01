import React from 'react'
import { Box, Container, CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigation } from './components'
import { Home, Settings, Reccomend } from './pages'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="reccomend" element={<Reccomend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  )
}

export default App
