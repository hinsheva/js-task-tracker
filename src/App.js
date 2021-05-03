import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Button from './components/Button';
import AddTask from './components/AddTask';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum dui laoreet, sollicitudin purus quis, faucibus massa. Pellentesque rutrum scelerisque ornare.',
      date: '01-01-01',
      reminder: false,
    },
    {
      id: 2,
      name: 'Nulla leo orci, luctus non odio et, tempus molestie leo. Duis molestie aliquam ex eget porttitor. Suspendisse potenti.',
      date: '01-01-01',
      reminder: true,
    },
    {
      id: 3,
      name: 'In vehicula viverra purus, vel rutrum nisl.',
      date: '01-01-01',
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    console.log("adding a task...", task)
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className='container'>
      <Header title="Task Tracker"/>
      <Button text="Add" color=""/>
      <AddTask onAdd={addTask}/>
      {tasks.length> 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <div style={{color:"snow"}}>'No tasks for now...'</div>}
    </div>
  );
}

export default App;
