import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Ler livros',
      completed: false
    },
    {
      id: '2',
      title: 'Praticar esportes',
      completed: false
    },
    {
      id: '4',
      title: 'Estudar programação',
      completed: true
    }
  ])

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })
  }

  const handleTaskAddition = taskTitle => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
