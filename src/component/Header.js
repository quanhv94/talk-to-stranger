import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Talk to Stranger
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
