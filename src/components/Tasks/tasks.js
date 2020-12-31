import React,{useState} from 'react';
import SearchBar from './searchBar';
import styles from './task.module.css';
import CompletedTasks from './completedTasks';
import ActiveTasks from './activeTasks';

function Tasks() {

  const [activeTasks] = useState([{
    taskID: 'Task1',
      label : 'Complete Dashboard',
      assignedTo: [{'name': 'Alick Lazare','displayImg' : null},{'name' : 'John Johnson', 'displayImg': null}],
      time: '8:00 - 10:00',
      date: 'December 26 2020',
      location: 'Sugar Hill',
      status: 'Completed',
  }]);
  const [completedTasks] = useState([{
      taskID: 'Task1',
      label : 'Complete Dashboard',
      assignedTo: [{'name': 'Alick Lazare','displayImg' : null},{'name' : 'John Johnson', 'displayImg': null}],
      time: '8:00 - 10:00',
      date: 'December 26 2020',
      location: 'Sugar Hill',
      status: 'Completed',
     
  }]);
  const [viewCompletedTasks,toggleTaskView] = useState(true); //Tracks what view is in focus
 


  const {innerWidth,innerHeight} = window;
  return (
    <div style = {{width:innerWidth,height:innerHeight,backgroundColor:'#FFFFFF'}}>
    <div className = {styles.mainDiv}>
      <h3 className = {styles.header}>Task Management</h3>
      <div style = {{display:'flex',flexDirection:'row',paddingLeft:'40px',justifyContent:'space-between',width:'30%', marginBottom:50}}>
        <button className = {styles.selectorButton} onClick = {()=> toggleTaskView(false)}>
          <h2 className = {styles.taskSelector}> Active Tasks ({activeTasks.length})</h2>
          <div className = {viewCompletedTasks ? styles.selectorInactive : styles.selectorActive}></div>
        </button>
        <button className = { styles.selectorButton} onClick = {()=> toggleTaskView(true)}>
          <h2 className = {styles.taskSelector}> Completed Tasks ({completedTasks.length})</h2>
          <div className = {viewCompletedTasks ? styles.selectorActive : styles.selectorInactive}></div>
        </button>
      </div>
      {
        viewCompletedTasks ? <CompletedTasks tasks = {completedTasks}/> : <ActiveTasks tasks = {activeTasks}/>
      }
    </div>
    </div>
  );
  }

export default Tasks;



const inactiveHeaderButtonStyle = {
  backgroundColor: 'transparent',
  border:'none',
  cursor:'pointer'
}

const headerButtonStyle = {
  backgroundColor:'transparent',
  borderWidth: 0,
  borderBottomWidth:6,
  borderColor : '#EB5729',
  cursor:'pointer'}

const mainDivStyle = {
  display:'flex', 
  flexDirection:'row',
  width:'80%', 
  justifyContent:'space-between',
  marginBottom:50
}

const taskDiv = {
  display:'flex', 
  flexDirection:'row',
  width:'80%', 
  justifyContent:'space-between',
  marginBottom:10
}

const tableHeaderStyle = {
  FontFamily: 'Inter',
FontStyle: 'Medium',
FontSize: '14px',
LineHeight: '17px',
LineHeight: '100%',
Align: 'Center',
VerticalAlign: 'Center'
}