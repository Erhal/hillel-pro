import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo} from "../../store/slices/todos";
import {Trash2} from "react-bootstrap-icons";

const Todo = ({todo}) => {
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
            </td>
            <td>
                {todo.completed ? <span className='mx-3' style={{textDecoration: 'line-through'}}>{todo.title}</span> :
                    <span className='mx-3'>{todo.title}</span>}
            </td>
            <td>
                {todo.completed ?
                    <span style={{cursor: 'pointer'}} onClick={() => dispatch(deleteTodo(todo.id))}><Trash2/></span> :
                    <span style={{color: 'gray'}}><Trash2/></span>}
            </td>
        </tr>
    )
};

export default Todo;