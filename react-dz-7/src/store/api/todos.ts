import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ITodo} from "../../types";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://jsonplaceholder.typicode.com/'}
    ),
    endpoints: (builder) => ({
        getAllTodos: builder.query<ITodo[], void>({
            query: () => 'todos'
        })
    })
})

export const {useGetAllTodosQuery} = todosApi;
