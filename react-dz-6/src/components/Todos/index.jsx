import {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";

import TodoItem from "./TodoItem";
import TodosPagination from "./TodosPagination";
import TodosSort from "./TodosSort";

import useFilterTodos from "../../hooks/useFilterTodos";
import useGetSortedList from "../../hooks/useGetSortedList";

import {useGetAllTodosQuery} from "../../store/api/todos";

import './style.scss'


const Todos = () => {
    useGetAllTodosQuery();

    const {todos} = useSelector(state => state.todos);

    const [page, setPage] = useState(1);
    const [userSortId, setUserSortId] = useState('all');
    const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);

    const userIdArr = useMemo(() => new Set(todos.map(todo => todo.userId)), [todos]);
    const sortedList = useGetSortedList(showOnlyCompleted, todos, userSortId);
    const filteredTodos = useFilterTodos(page, sortedList);
    const onSelect = (e) => {
        setPage(1);
        setUserSortId(e.target.value);
    };

    useEffect(() => {
        if (page !== 1 && filteredTodos.length === 0) setPage(page - 1);
    }, [filteredTodos]);

    return (
        <div className='todos'>
            <h1>TODOS COUNT: {sortedList.length}</h1>
            <TodosSort {...{userSortId, userIdArr, onSelect}} />
            <label>
                <input type="checkbox"
                       onChange={() => setShowOnlyCompleted(!showOnlyCompleted)}
                       checked={showOnlyCompleted}
                />
                <span>Only completed</span>
            </label>
            <div className="todos__list">
                {filteredTodos.map(todo => (<TodoItem {...todo} key={todo.id}/>))}
            </div>
            <TodosPagination {...{page, setPage, sortedList}}/>
        </div>
    );
};

export default Todos;