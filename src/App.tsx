import React, {FC , useState, ChangeEvent} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {InterfaceTask} from './Types/Interfaces'
import { TodoItem } from './Components/TodoItem';

const App : FC=()=> {
  const [task, setTask] = useState<string>("")
  const [finishDay, setFinishDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<InterfaceTask[]>([])
 
  const HandleInputChange =(event : ChangeEvent<HTMLInputElement>) : void=> {
    (event.target.name ==="task")?setTask(event.target.value): setFinishDay(Number(event.target.value))
        
  }

  const addTodo=():void=>{
    const newTask = {taskName : task , finishDay:finishDay}
    setTodoList([...todoList, newTask])
    setTask("")
    setFinishDay(0)
  }

  const deleteTask=(todoItem:string) :void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName != todoItem
    }))
  }
  return (
    <div className="App">
     <div className='Header'>
      <div className='inputCont'>
      <input type="text" placeholder='Enter your Task...' name="task" value={task} onChange={HandleInputChange}/>
      <input type="number" placeholder='Number of days...' name="finishDay" value={finishDay} onChange={HandleInputChange} />
      </div>
      <Button variant="primary" onClick={addTodo}>Add Task</Button>
     </div>
     <div className='Todos'>
      {todoList.map((task : InterfaceTask, index : number )=>{
        return <TodoItem task={task} key={index} deleteTask={deleteTask} />
      })}
     </div>
    </div>
  );
}

export default App;
