import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext';


const TaskForm = () => {

    const {addNewTask, clearAll, editTask, editItem} = useContext(TaskListContext);
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem) {
            addNewTask(title)
            setTitle('')
        }
        else {
            editTask(title, editItem.id)
        }
    }

    const handleChangeText = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if(editItem !== null) {
            setTitle(editItem.title);
            console.log("Edit Item ", editItem)
        }
        else {
            setTitle('');
        }
    }, [editItem])

    return (
        
        <form onSubmit={handleSubmit} className="form">
            <input type="text" className="task-input" placeholder="Add Task" required onChange={handleChangeText} value={title} />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    <i className={editItem ? 'fas fa-edit' : 'fas fa-save'}></i> &nbsp;
                    {editItem ? 'Edit Task' : 'Add Task'} 
                </button>
                <button className="btn clear-btn" onClick={() => clearAll()} disabled={editItem ? true : false}>
                    <i className="fas fa-redo-alt"></i> &nbsp; Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm
