import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './taskinp.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div>
      <input 
      className='inp'
        type="text" 
        value={task} 
        placeholder='Enter your todo item'
        onChange={(e) => setTask(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' ? handleAddTask() : null} 
      />
      <button className='butt' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
