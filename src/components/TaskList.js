import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
            {
                tasks.length ? (
                    <ul className="list">
                        {
                            tasks.map((t) => {
                                return <Task {...t} key={t.id}/>
                            })
                        }
                    </ul>
                ) : (
                    <div className="no-tasks">
                        <h3>NO TASKS</h3>
                    </div>
                )
            }


            
        </div>
    )
}

export default TaskList
