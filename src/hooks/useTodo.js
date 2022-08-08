import React, { useState, useEffect } from 'react';

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);
  return {
    tasks,
    setTasks,
    addTask: (value) => {
      const newTask = {
        id: Date.now(),
        body: value.body,
        isDone: false
      };
      setTasks([...tasks, newTask])
    },
    setDoneTask: (id) => {
      setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : { ...task, isDone: false }))
    },
    deleteTask: (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    }
  }
};

export default useTodo;