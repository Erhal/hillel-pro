import React from 'react';
import {changeTodoStatus, removeTodo} from "../../store/slices/todos";
import {useDispatch} from "react-redux";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import {ReactComponent as RemoveIcon} from "../../assets/icons/remove.svg";

const TodoItem = ({id, completed, title}) => {
    const dispatch = useDispatch();
    return (
        <div key={id}
             className={`todos__item todos-item${completed ? ' todos-item--completed' : ''}`}>
            <span className='todos-item__title'>#{id} - {title}</span>
            <div className="todos-item__actions">
                <button type='button'
                        className='todos-item__button'
                        onClick={() => dispatch(changeTodoStatus(id))}>
                    <EditIcon/>
                </button>
                {
                    completed && (
                        <button type='button'
                                className='todos-item__button'
                                onClick={() => dispatch(removeTodo(id))}>
                            <RemoveIcon/>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default TodoItem;