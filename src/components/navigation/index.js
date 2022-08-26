import React, { useState } from 'react'
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Hidden,
} from '@mui/material'
import { Settings } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const pages = ['Home', 'Reccomend', 'Settings']

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {pages.map((page, i) => (
          <Link key={i} to={i === 0 ? '/' : `${page.toLowerCase()}`}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Hidden only={['lg', 'xl']}>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies recomendation
            </Typography>
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              {pages.map((page, i) => (
                <Link key={i} to={i === 0 ? '/' : `${page.toLowerCase()}`}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {list()}
        </Drawer>
      </Box>
    </>
  )
}

export default Navigation
