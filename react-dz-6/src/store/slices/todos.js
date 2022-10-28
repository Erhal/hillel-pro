import {createSlice} from "@reduxjs/toolkit";
import {todosApi} from "../api/todos";

const initialState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        removeTodo: (state, {payload}) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        changeTodoStatus: (state, {payload}) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        },
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

export const {removeTodo, changeTodoStatus} = todosSlice.actions;

export default todosSlice.reducer;