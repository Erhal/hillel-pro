import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {todosApi} from "../api/todos";
import {ITodosSlice} from "./type";

const initialState: ITodosSlice = {
    todos: [],
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        removeTodo: (state, {payload}: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        changeTodoStatus: (state, {payload}: PayloadAction<number>) => {
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