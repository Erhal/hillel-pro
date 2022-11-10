import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";
import {todosApi} from "./api/todos";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store