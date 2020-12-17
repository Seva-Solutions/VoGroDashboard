import React,{useState} from 'react';
import SearchBar from './searchBar';
import Styles from './task.module.css';
import CompletedTasks from './completedTasks';

function Tasks() {

  const [activeTasks] = useState(0);
  const [completedTasks] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [viewCompletedTasks,toggleTaskView] = useState(true);

  const {innerWidth,innerHeight} = window;
  return (
    <div style = {{paddingLeft: 100, width:0.9*innerWidth,display:'flex',flexDirection:'column'}}>
    <h3 style={{fontSize: '30px',paddingLeft:40,marginBottom:100}}>Task Management</h3>
    <div style = {{display:'flex',flexDirection:'row',paddingLeft:'40px',justifyContent:'space-between',width:'30%', marginBottom:50}}>
      <button style = { viewCompletedTasks ? inactiveHeaderButtonStyle : headerButtonStyle} onClick = {()=> toggleTaskView(false)}>
        <h2> Active Tasks ({activeTasks})</h2>
      </button>
      <button style = { viewCompletedTasks ? headerButtonStyle : inactiveHeaderButtonStyle} onClick = {()=> toggleTaskView(true)}>
       <h2> Completed Tasks ({completedTasks})</h2>
      </button>
      
    </div>
    <div style = {mainDivStyle}>
      <SearchBar
      value = {searchText}
      onChange = {text=> setSearchText(text)} />
      <button 
      style = {{borderRadius: 15, width:'10%',height: 0.3*(0.1*innerWidth), aspectRatio:2, backgroundColor:'#EB5729',cursor:'pointer'}}>
        <text style = {{color:'white'}}> Remove</text>
        </button>
    </div>

    <div style = {taskDiv}>
      <h4>Task</h4>
      <h4>Assigned To</h4>
      <h4>Duration</h4>
      <h4>Location</h4>
      <h4>Status</h4>
    </div>
    {
      viewCompletedTasks ? <CompletedTasks /> : <text style = {{alignSelf:'center',marginTop:50}}> To do</text>
    }
   
    
  
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
  borderColor : '#1661AA',
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