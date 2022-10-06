import {createSlice} from "@reduxjs/toolkit";
import todosApi from "../api/todos";

const initialState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push({
                id: Math.max(...state.todos?.map(todo => todo.id), 0) + 1,
                todo: payload,
                completed: false
            });
        },
        toggleTodo: (state, {payload}) => {
            const todo = state.todos.find(todo => todo.id === payload);
            todo.completed = !todo.completed;
        },
        deleteTodo: (state, {payload}) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        toggleAllTodos: (state, {payload}) => {
            state.todos.forEach(todo => todo.completed = payload);
        },
        deleteAllCompletedTodos: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            todosApi.endpoints.getAllTodos.matchFulfilled,
            (state, {payload}) => {
                state.todos = payload
            }
        )
    }
});

export const {addTodo, toggleTodo, deleteTodo, toggleAllTodos, deleteAllCompletedTodos} = todosSlice.actions;

export default todosSlice.reducer;