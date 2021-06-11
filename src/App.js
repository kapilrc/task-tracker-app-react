import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';

import Header from './components/Header';
import Tasks from './components/Tasks';
// import { serverUrl } from './constants';

const serverUrl = "http://localhost:5000";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = async task => {
    const res = await fetch(`${serverUrl}/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // Delete task
  const deleteTask = async (id) => {
    try {
      await fetch(`${serverUrl}/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter(t => t.id !== id));

    } catch (err) {
      console.log("Unable to delete data", err)
    }
  }

  // Toggle Reminder
  const toggleReminder = async id => {
    const taskToToggle = await fetchTasks(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`${serverUrl}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateTask)
    });
    const data = await res.json();
    setTasks(tasks.map(t => t.id === id ? { ...t, reminder: data.reminder } : t));
  }

  // Fetch Tasks
  const fetchTasks = async (id = "") => {
    const res = await fetch(`${serverUrl}/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)

      console.log(tasks);
    }
    getTasks();
  }, [])

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No tasks")}
    </div>
  );
}

export default App;
