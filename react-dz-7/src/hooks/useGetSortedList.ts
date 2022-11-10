import {useMemo} from "react";
import {ITodo} from "../types";

const useGetSortedList = (
    showOnlyCompleted: boolean,
    todos: ITodo[],
    userSortId: string | number,
    searchValue: string,
): ITodo[] => {
    return useMemo(() => {

        const searchList = todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))

        const sortList = showOnlyCompleted ? searchList.filter(todo => todo.completed) : searchList;

        if (userSortId === 'all') {
            return sortList
        }
        return sortList.filter(todo => todo.userId === +userSortId);
    }, [todos, userSortId, showOnlyCompleted, searchValue]);
}

export default useGetSortedList;