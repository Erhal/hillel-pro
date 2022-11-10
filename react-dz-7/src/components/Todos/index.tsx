import {ChangeEvent, FC, useEffect, useMemo, useState} from "react";

import TodoItem from "./TodoItem";
import TodosPagination from "./TodosPagination";
import TodosSort from "./TodosSort";

import useFilterTodos from "../../hooks/useFilterTodos";
import useGetSortedList from "../../hooks/useGetSortedList";

import {useGetAllTodosQuery} from "../../store/api/todos";

import './style.scss'
import {useAppSelector} from "../../store/hooks";


const Todos:FC = () => {
    useGetAllTodosQuery();

    const {todos} = useAppSelector(state => state.todos);

    const [page, setPage] = useState<number>(1);
    const [userSortId, setUserSortId] = useState<string | number>('all');
    const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('')

    const userIdArr: Set<number> = useMemo(() => new Set(todos.map(todo => todo.userId)), [todos]);
    const sortedList = useGetSortedList(showOnlyCompleted, todos, userSortId, searchValue);
    const filteredTodos = useFilterTodos(page, sortedList);

    const onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        setPage(1);
        setUserSortId(e.target.value);
    };
    const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
        setPage(1);
    }

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
            <input type="search" onChange={onSearch} value={searchValue}/>
            <div className="todos__list">
                {filteredTodos.map(todo => (<TodoItem {...todo} key={todo.id}/>))}
            </div>
            {!filteredTodos.length && <h2 className='todos__empty'>No todos</h2>}
            {!!filteredTodos.length && <TodosPagination {...{page, setPage, sortedList}}/>}
        </div>
    );
};

export default Todos;