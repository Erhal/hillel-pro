import React from 'react';
import {Trash2} from "react-bootstrap-icons";

const Todo = ({task, onChange, onDelete}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={task.completed} onChange={() => onChange(task.id)}/>
            {task.completed ? <span className='mx-2' style={{textDecoration: 'line-through'}}>{task.title}</span> : <span className='mx-2'>{task.title}</span>}
            {task.completed ? <span style={{cursor: 'pointer'}} onClick={() => onDelete(task.id)}><Trash2/></span> : <Trash2 style={{color: 'gray'}}/>}
        </div>
    )
};

export default Todo;