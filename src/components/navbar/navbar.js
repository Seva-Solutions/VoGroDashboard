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
import Tasks from '../Tasks/tasks'
import Volunteers from '../Volunteers/volunteers'
import Inbox from '../Inbox/inbox'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
   
     

          <Router >
          <ul>
                    <li><Link to="/task">Tasks <MailIcon /></Link></li>
                    <li><Link to="/volunteers">volunteers</Link></li>
                    <li><Link to="/inbox">inbox</Link></li>
          </ul>
          
            {/* <Route>
              <Link to="/volunteers" button> Volunteers <MailIcon /></Link>
            </Route>
            <Route>
            <Link to="/Inbox" button> Inbox <MailIcon /></Link>
            </Route> */}

    
    </Router>
            {/* <Switch>
            <Route component={Tasks} path='/task' />
        
            </Switch> */}
    
   
         
          
        {/* <ListItem button key={text}>
        <ListItem button key={text}>
          {['Tasks', 'Volunteers', 'Inbox'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
              {index % 1 === 0 ? <MailIcon /> : <InboxIcon />  }
            </ListItem>
          ))} */}
     
        <Divider />
      </Drawer>
      
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
             
    <Switch>
        <Route path='/task'>
            <Tasks />
        </Route>
        <Route path='/volunteers'>
            <Volunteers />
        </Route>
        <Route path='/inbox'>
            <Inbox/>
        </Route>
    </Switch>
      </main>
  
    </div>
    
    
  );
}
