import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Button from './components/Button';
import Input from './components/Input';
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


  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  const addTask = () => {}

  return (
    <div className='container'>
      <Header title="Task Tracker"/>
      <Button text="Add" color=""/>
      <Input />
      {tasks.length> 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <div style={{color:"snow"}}>'No tasks for now...'</div>}
    </div>
  );
}

export default App;
