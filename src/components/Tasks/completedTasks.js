import React,{useState} from 'react'

export default function CompletedTasksList(props){
    const [tasks] = useState([]);

    if(tasks === null || tasks.length == 0)
        return(
            <text style = {{alignSelf:'center', textAlign:'center',marginTop:50}}>
                You do not have any completed tasks.
            </text>
        )

    return(
        <ul>
            {tasks.map(task=>
                <div style = {mainDivStyle}>
                    <text>
                        {task.taskName}
                    </text>
                    <text>
                        {task.assignedTo}
                    </text>
                    <text>
                        {task.duration}
                    </text>
                    <text>
                        {task.location}
                    </text>
                    <text>
                        {task.status}
                    </text>
                </div>
            )}
        </ul>
    )
}

const mainDivStyle = {
    display:'flex', 
    alignItems:'flex-start',
    flexDirection:'row',
    width:'80%', 
    justifyContent:'space-between',
  }