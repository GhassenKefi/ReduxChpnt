import React from 'react'
import { Task } from './Task'

export const ListTask = ({tasks}) => {
    var taskList=tasks.map((e) =><Task key={e.id} task={e}></Task>)
    if (taskList.length > 0) {
    return (
        <div className="TaskList">
            {taskList}
        </div>
    )}
    else return null;
}

