import React, {useContext} from 'react';
import {Trash2} from "react-bootstrap-icons";
import AppContext from "../../providers/AppContext";

const Todo = ({task}) => {

    const {onChange, onDelete} = useContext(AppContext);

    return (
        <tr>
            <td>
                <input type="checkbox" defaultChecked={task.completed} onChange={() => onChange(task.id)}/>
            </td>
            <td>
                {task.completed ? <span className='mx-3' style={{textDecoration: 'line-through'}}>{task.title}</span> :
                    <span className='mx-3'>{task.title}</span>}
            </td>
            <td>
                {task.completed ? <span style={{cursor: 'pointer'}} onClick={() => onDelete(task.id)}><Trash2/></span> :
                    <span style={{color: 'gray'}}><Trash2/></span>}
            </td>
        </tr>
    )
};

export default Todo;