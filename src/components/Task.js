import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const Task = ({...t}) => {

    const {removeTask, foundTaskItem} = useContext(TaskListContext)

    return (
        <li className="list-item">
            <span>{t.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={() => removeTask(t.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="btn-edit task-btn" onClick={() => foundTaskItem(t.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
