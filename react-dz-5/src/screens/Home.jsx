import React, {createRef, useEffect, useState} from 'react';
import {useGetAllTodosQuery} from "../store/api/todos";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteAllCompletedTodos, toggleAllTodos} from "../store/slices/todos";
import Todo from "../components/Todo";
import {Trash2} from "react-bootstrap-icons";

const Home = () => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isSomeChecked, setIsSomeChecked] = useState(false);

    const {isLoading, isSuccess} = useGetAllTodosQuery();
    const {todos} = useSelector(state => state.todos);

    const dispatch = useDispatch();
    const inputRef = createRef();

    useEffect(() => {
        todos.map(todo => todo.completed).every(el => el === true) ?
            setIsAllChecked(true) : setIsAllChecked(false);
    }, [todos]);

    useEffect(() => {
        todos.map(todo => todo.completed).some(el => el === true) ?
            setIsSomeChecked(true) : setIsSomeChecked(false);
    }, [todos]);

    const KeyUpHandler = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(inputRef.current.value));
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <div className='text-center mt-4'>
                <h1>Todos</h1>
                <input className='text-center w-25' type="text"
                       ref={inputRef}
                       onKeyUp={KeyUpHandler}
                />
            </div>
            <table className='mx-auto mt-4'>
                {isLoading && <tbody className='text-center'><tr><td>Loading...</td></tr></tbody>}
                {isSuccess && todos.length === 0 && <tbody className='text-center'><tr><td>No todos</td></tr></tbody>}
                {isSuccess && todos.length > 0 &&
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox"
                                       checked={isAllChecked}
                                       onChange={() => dispatch(toggleAllTodos(!isAllChecked))}
                                />
                            </td>
                            <td></td>
                            <td>
                                {!isSomeChecked ?
                                    <span style={{color: 'gray'}}><Trash2/></span> :
                                    <span style={{cursor: 'pointer'}} onClick={() => dispatch(deleteAllCompletedTodos())}><Trash2/></span>
                                }
                            </td>
                        </tr>
                        <tr><td></td><td><hr/></td></tr>
                        {todos?.map(todo => <Todo todo={todo} key={todo.id}/>)}
                    </tbody>
                }
            </table>
        </div>
    );
};

export default Home;