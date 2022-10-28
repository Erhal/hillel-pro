import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";
import {todosApi} from "./api/todos";

export default configureStore({
    reducer: {
        todos: todosReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})