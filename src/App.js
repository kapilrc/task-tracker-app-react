import { useState } from 'react'
import AddTask from './components/AddTask';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    { id: "1", text: "Shopping", day: "Feb 5th at 2:30pm", reminder: false },
    { id: "2", text: "Doctor's Appointment", day: "Feb 5th at 2:30pm", reminder: true },
    { id: "3", text: "School Admission", day: "Feb 8th at 5:30pm", reminder: false }
  ]);

  // Add Task
  const addTask = task => {
    const id = Math.floor(Math.random() * 100000) + 1;
    setTasks([...tasks, { id, ...task }]);
  }

  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, reminder: !t.reminder } : t));
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No tasks")}
    </div>
  );
}

export default App;
