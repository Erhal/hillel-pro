import {FC} from 'react';
import {ITodoSortProps} from "./types";

const TodosSort:FC<ITodoSortProps> = ({userSortId, userIdArr, onSelect}) => {
    return (
        <select value={userSortId} onChange={onSelect}>
            <option value='all'>All</option>
            {
                [...userIdArr].map(userId => <option key={userId} value={userId}>userId: {userId}</option>)
            }
        </select>
    );
};

export default TodosSort;