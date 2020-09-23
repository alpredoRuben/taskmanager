import React, {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();


const storageName = 'myTasks'

const TaskListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem(storageName)) || [];

    const [tasks, setTasks] = useState(initialState)
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem(storageName, JSON.stringify(tasks))
    }, [tasks])


    const addNewTask = (title) => {
        setTasks([
            ...tasks,
            {title, id: uuidv4()}
        ])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter( t => t.id !== id ))
    }

    const clearAll = () => {
        setTasks([])
    }

    const foundTaskItem = id => {
        const item = tasks.find(t => t.id === id);
        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTask = tasks.map(t => {
            console.log("Hasil", t.id === id);
            return t.id === id ? {title, id} : t
        });

        console.log("New Task After Edit", newTask)
        setTasks(newTask);
    }

    return (
        <TaskListContext.Provider value={{ tasks, addNewTask, removeTask, clearAll, foundTaskItem, editTask, editItem }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
