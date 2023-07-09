import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const MovieCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Card
      sx={{ maxWidth: '100%', position: 'relative' }}
      md={{ maxWidth: '30%' }}
      lg={{ maxWidth: 220 }}
    >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          position: 'absolute',
          right: 0,
          borderradius: '50%',
          background: 'rgba(0,0,0,0.25)',
          '&:hover': {
            background: 'rgba(250,250,250,0.25)',
          },
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>option1</MenuItem>
        <MenuItem>option2</MenuItem>
        <MenuItem>option3</MenuItem>
        <MenuItem>option4</MenuItem>
      </Menu>
      <CardMedia
        component="img"
        height="330"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom component="div">
          Title
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Jul 06, 2022
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard
