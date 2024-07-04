import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import './taskinp.css'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleEdit = (index) => {
    setCurrentTask(tasks[index]);
    setCurrentIndex(index);
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask(currentIndex, currentTask));
    setIsEditing(false);
    setCurrentTask('');
    setCurrentIndex(null);
  };

  return (
    <div>
      {isEditing && (
        <div>
          <input 
          className='inp'
            type="text" 
            value={currentTask}
            placeholder='Edit the Text' 
            onChange={(e) => setCurrentTask(e.target.value)} 
          />
          <button className='butt' onClick={handleSave}>Save</button>
        </div>
      )}
      <ul>
        {tasks.map((task, index) => (
          <li className='listItem' key={index}>
            {task}
            <button className='butt' onClick={() => dispatch(deleteTask(index))}>Delete</button>
            <button className='butt' onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
