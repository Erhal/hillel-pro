import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://dummyjson.com/'}
    ),
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => 'todos',
            transformResponse: (response) => {
                return response
            }
        })
    })
})

export const {useGetAllTodosQuery} = todosApi;
export default todosApi;
