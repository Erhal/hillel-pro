import {ChangeEvent} from "react";
import {ITodo} from "../../types";

export interface ITodoSortProps {
    userSortId: string | number,
    userIdArr: Set<number>,
    onSelect: (e: ChangeEvent<HTMLSelectElement>) => void,
}

export interface  ITodosPaginationProps {
    page: number,
    setPage: (page: number) => void,
    sortedList: ITodo[],
}

export interface ITodoItemProps extends ITodo{}