import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import '..//App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title" >
              <Link to="/" style={{ textDecoration: 'none',color:'white' }}>Home</Link>
          </Typography>
          <Typography variant="h6" className="title" >
              <Link to="/about" style={{ textDecoration: 'none',color:'white' }}>About</Link>
          </Typography>
          <Typography variant="h6" className='title' >
              <Link to="/product" style={{ textDecoration: 'none',color:'white' }}>Product</Link>
          </Typography>
          <Typography variant="h6" className='title' >
              <Link to="/cart" style={{ textDecoration: 'none', color:'white'}}> Cart</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
