import React from 'react'
import TaskItem from './TaskItem'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
      }
    </>
  )
}

export default Tasks
