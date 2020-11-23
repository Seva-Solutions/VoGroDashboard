import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styles from './navbar.module.css'
import logo from './logo.png'
import AccountInfo from './accountInfo'
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
const drawerWidth = 260;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'absolute',
    maxHeight:600
    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  pos: {
    width: 500,
    height: 80,
    display: 'flex',
 
  },
  notification: {
    position:'fixed',
    right: '16%',
    border: 'none',
    boxShadow : 'none',
    top: '2.7%',
    fontSize: 35,
    color: 'black'
  }
  
}));


export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
      style={{ background: 'white',height :"80px", paddingTop: "8px"}}
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        
          <IconButton
            style={{ color: '#EB5729', size:'90px' }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <img src={logo}  style={{ height: 53, width: 56 }} alt="Logo" /> */}
          <img src={logo} alt="VoGro Logo" height="60" className={classes.logo}/>
          {/* <Typography variant="h6" noWrap style={{ color: '#EB5729', fontSize:'32px', fontWeight:'bold',}}>
            VoGro    
            <NotificationsIcon className={classes.notification} />
          </Typography> */}
        
        </Toolbar>
        <AccountInfo className = {classes.pos}/>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        {[['Tasks' , '/tasks'], ['Volunteers' , '/volunteers'],['Inbox' , '/inbox']].map((values, index) => {
            debugger
            const text = values[0];
            const link = values[1];
            return (
              <div>
                <Link to={link} onClick={handleDrawerClose}>
                    <ListItem button key={text} >
                    <ListItemText primary={text} />
                {index % 2 === 0 ? <MailIcon  style={{color: "orange"}}/> : <MailIcon  style={{color: 'orange'}}/>}
                    </ListItem>
                </Link>
              </div>             
            );
        })}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
    
      </main>
    </div>
  );
}