import {useMemo} from "react";

const useGetSortedList = (showOnlyCompleted, todos, userSortId) => {
    return useMemo(() => {
        const sortList = showOnlyCompleted ? todos.filter(todo => todo.completed) : todos;

        if (userSortId === 'all') return sortList;
        return sortList.filter(todo => todo.userId === +userSortId);
    }, [todos, userSortId, showOnlyCompleted]);
}

export default useGetSortedList;