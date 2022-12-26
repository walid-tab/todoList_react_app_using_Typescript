import React from 'react'
import { PropsTask } from '../Types/Interfaces'

export const TodoItem = ({task, deleteTask}:PropsTask) => {
  return (
    <div className='TaskItem'>
        <div className='ContainerItem'>
            <span>{task.taskName}</span> 
            <span>{task.finishDay}</span>      
        </div>
        <button onClick={()=>{deleteTask(task.taskName)}}>X</button>
        

    </div>
  )
}
