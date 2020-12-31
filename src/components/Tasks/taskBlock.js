import React,{useState,useEffect} from 'react';
import styles from './task.module.css';
import {Checkbox,Avatar} from '@material-ui/core';
import {Room,SendOutlined,MoreVert} from '@material-ui/icons'


export default function TaskBlock(props){
    const task = props.task;
    const index = props.index;

    const[checked,toggleCheck] = useState(false);
  
    if(task === null)
        return null

    return(
        <div className = {`${styles.taskDivStyle} ${styles.taskBodyStyle}`}>
            <div style = {divStyle}>
                <Checkbox
                name = {index}
                checked = {checked}
                size = 'medium'
                onChange = {(event)=>{
                    const newChecked = event.target.checked;
                    console.log(newChecked)
                    if(newChecked === true)
                        props.onSelected(task.taskID);
                    else
                        props.onDeselected(task.taskID);
                        toggleCheck(newChecked)
                }}
                //style = {{color:checked ? 'primary':'transparent'}}
                className = {styles.checkBoxStyle}
                />
                <text className = {styles.taskBodyText}>{task.label}</text>
            </div>
            <div style = {avatarDivStyle}>
                {
                    task.assignedTo.map((volunteer,index)=> <Avatar alt = {'Alick'} src = {volunteer.displayImg} 
                                                                className = {index === 0 ? styles.avatarStyle : styles.avatarStylewithMargin}>A{index}</Avatar>)
                }
                
            </div>
            <div style = {{display:'flex',flexDirection:'column',flex:1}}>
                <text className = {styles.taskBodyText}>{task.time}</text>
                <text className = {styles.taskBodyText}>{task.date}</text>
            </div>
            <div style = {divStyle}>
                <Room className = {`${styles.primaryColor} ${styles.mapPin}`}/>
                <text className = {styles.taskBodyText}>{task.location}</text>
            </div>
            <div style = {divStyle}> 
                <text className = {styles.taskBodyText}>{task.status}</text>
                
            </div>
            <div style = {{display:'flex',flex:1,flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
            <SendOutlined className = {`${styles.primaryColor} ${styles.sendIcon}`}/>
            <MoreVert style = {{alignSelf:'flex-start'}}/>
            </div>
        </div>
    )

}

const taskDiv = {
    display:'flex', 
    flex:1,
    flexDirection:'row',
    //width:'80%', 
    height: '20%',

  justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom:10,
    marginTop:10,
    background: '#FFFFFF',
    
  }

  const divStyle = {
      flex:1
  }

  const avatarDivStyle = {
      display:'flex',
      flex:1,
      flexDirection:'row-reverse',
      justifyContent:'flex-end',
      alignItems:'flex-end'
  }