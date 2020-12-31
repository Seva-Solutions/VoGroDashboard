import React,{useState, useEffect} from 'react'
import SearchBar from './searchBar'
import TaskBlock from './taskBlock';
import styles from './task.module.css'
import {AddCircleOutline,Menu,CalendarToday,Room} from '@material-ui/icons'

export default function ActiveTasksList(props){
    const [tasks,setTasks] = useState([]);
    const [searchText,setSearchText] = useState('')
    const [selectedTasks,setSelectedTasks] = useState([]); //Contaisn ID of all selected tasks
    const [searchTasks,setSearchTasks] = useState([]);
    const [taskView,toggleTaskView] = useState(0)

    const taskProps = props.tasks;


    
    /**
     * On first render hook sets task state to task prop
     */
    useEffect(()=>{
      if(Array.isArray(taskProps) )
        setTasks(taskProps);
    },[]);

    /*Hook searches for task among main task container
      Criteria: task label
    */
    useEffect(()=>{

      setSearchTasks(tasks.filter(task=>
        task.label.includes(searchText)
      ));

    },[searchText]);

    /**
     * Adds new tasks to our array of selected tasks. 
     * @param {ID of task added to our array of selected task.} taskid 
     */
    function addSelectedTask(taskid){
      
      if(selectedTasks.includes(taskid) || !Array.isArray(selectedTasks)) //prevents duplicate entries of tasks into our array.
        return;
      
      const tempArray = selectedTasks.concat(taskid);
      setSelectedTasks(tempArray);
    }
    /**
     * Removes task from our array of selected tasks.
     * @param {ID of task to be removed from array of selected tasks} taskid 
     */
    function removeSelectedTask(taskid){

      if(!selectedTasks.includes(taskid) || !Array.isArray(selectedTasks)) //prevents trying to remove task which is not in our selected array.
        return;
      
        const tempArray = selectedTasks.filter(task=> task!== taskid)
        setSelectedTasks(tempArray);
    }

    return(
        <div>
        <div style = {mainDivStyle}>
        <button 
        className = {styles.buttonStyle}
        style = {{marginRight:30}}>
          <AddCircleOutline style = {{color:'white', fontsize: 10,paddingRight: 2}}/>
          <text style = {{color:'white'}}> Create Task</text>
          </button>
        <SearchBar
        value = {searchText}
        onChange = {text=> setSearchText(text)} />
        <div className = {styles.activeTaskButtonGroup}>
            <Menu className = {`${(taskView ===0) ? styles.primaryColor : styles.primaryColorInactive} ${styles.iconButtons}`} fontSize = 'large' />
            <CalendarToday className = {`${(taskView ===1) ? styles.primaryColor : styles.primaryColorInactive}`} fontSize = 'large'/>
            <Room className = {`${(taskView ===2) ? styles.primaryColor : styles.primaryColorInactive}`} fontSize = 'large'/>

        </div>
       
      </div>
      
      <div className = {styles.taskDivStyle}>
        <h4 className = {styles.headerText} onClick = {()=>addSelectedTask('Test')}>Task</h4>
        <h4 className = {styles.headerText} onClick = {()=> removeSelectedTask('Test')}>Assigned To</h4>
        <h4 className = {styles.headerText}>Duration</h4>
        <h4 className = {styles.headerText}>Location</h4>
        <h4 className = {styles.headerText}>Status</h4>
      </div>
      
  {
      (tasks === null || tasks.length === 0) 
                        ? 
      <text style = {{alignSelf:'center', textAlign:'center',marginTop:50}}>
      You do not have any completed tasks.
    </text>

                        :
    (searchText.length === 0 || searchText === null)
                        ?
    <ul style = {{padding:0}}>
    {tasks.map(task=>
     <TaskBlock task = {task} onSelected = {(taskID)=>addSelectedTask(taskID)} onDeselected = {(taskID)=> removeSelectedTask(taskID)}/>
                   
    )}
    </ul>
                        :
         <ul style = {{padding:0}}>
           {
             searchTasks.length === 0
                    ?
                    <text>No tasks match: "{searchText}"</text>
                    :
                    searchTasks.map(task=>
                      <TaskBlock task = {task} />)
           }
         </ul>
  } 
       
    </div>
    )
}

const mainDivStyle = {
    display:'flex', 
    alignItems:'center',
    flexDirection:'row',
    width:'80%', 
    justifyContent:'space-between',
   
  }

  