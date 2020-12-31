import React,{useState, useEffect} from 'react'
import SearchBar from './searchBar'
import TaskBlock from './taskBlock';
import styles from './task.module.css'
import {RemoveCircleOutline} from '@material-ui/icons'
export default function CompletedTasksList(props){
    const [tasks,setTasks] = useState([]);
    const [searchText,setSearchText] = useState('')
    const [selectedTasks,setSelectedTasks] = useState([]); //Contaisn ID of all selected tasks
    const [searchTasks,setSearchTasks] = useState([]);

    const tasksProps = props.tasks;


   /**
    * On first render hook sets task state to tasks passed from props.
    */
   useEffect(()=>{
    if(Array.isArray(tasksProps) )
      setTasks(tasksProps)
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

    function removeTasks(){
      if(!Array.isArray(selectedTasks) || !Array.isArray(tasks))
        return
        const tempArray = tasks.filter(task=>{
          const isSelected = selectedTasks.findIndex(selTask=> selTask === task.taskID);
          if(isSelected >= 0)
            return false;
          else
            return true;
        })
        console.log(tempArray)
        setTasks(tempArray);
       
    }

    return(
        <div>
        <div style = {mainDivStyle}>
        <SearchBar
        value = {searchText}
        onChange = {text=> setSearchText(text)} />
        <button 
        className = {(selectedTasks.length === 0 || !Array.isArray(selectedTasks))  ? styles.inactiveButton : styles.buttonStyle}
        onClick = {removeTasks}>
          <RemoveCircleOutline style = {{color:'white', fontsize: 10,paddingRight: 5}}/>
          <text style = {{color:'white'}}> Remove</text>
          </button>
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
     <TaskBlock task = {task} onSelected = {(taskID)=>addSelectedTask(taskID)} onDeselected = {(taskID)=> removeSelectedTask(taskID)} key = {task.taskID}/>
                   
    )}
    </ul>
                        :
         <ul style = {{padding:0}}>
           {
             searchTasks.length === 0 //If no elements are present in search array.
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

  