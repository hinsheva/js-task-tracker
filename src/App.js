import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Button from './components/Button';
import Input from './components/Input'

function App() {
  return (
    <div className='container'>
      <Header title="Task Tracker"/>
      <Button text="Add" color=""/>
      <Input />
      <Tasks />
    </div>
  );
}

export default App;
