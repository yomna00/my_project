import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1}} class ="body">
      <AppBar position="static">
        <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div" className='fontsize'>
          Hair Salon
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml:3}}>
            <AddBoxIcon /><span sx={{fontSize:100}}>New Booking</span>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}