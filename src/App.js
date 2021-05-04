import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';


function App() {
  const [showAddTaskSection, setShowAddTaskSection] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const getTasks = async () => {
     const tasksFromServer = await fetchTasksFromAPI();
     setTasks(tasksFromServer)
    }
    getTasks();
  },[])

  const fetchTasksFromAPI = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className='container'>
      <Header title="Task Tracker" onAddButtonClick={()=>setShowAddTaskSection(!showAddTaskSection)} showAddTaskSection={showAddTaskSection} />
      {showAddTaskSection && <AddTask onAdd={addTask}/>}
      {tasks.length> 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <div style={{color:"snow"}}>'No tasks for now...'</div>}
    </div>
  );
}

export default App;
