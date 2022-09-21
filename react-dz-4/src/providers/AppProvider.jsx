import React, {createRef, useState} from "react";

import AppContext from "./AppContext";

const AppProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const inputRef = createRef();

    const onChange = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    const addTodo = (title, key) => {
        if (key === 'Enter' && title.trim()) {
            setTodos([...todos, {id: (todos.at(-1)?.id + 1 || 1), title, completed: false}]);
            inputRef.current.value = "";
        }
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <AppContext.Provider value={{ todos, setTodos, inputRef, onChange, addTodo, onDelete}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;