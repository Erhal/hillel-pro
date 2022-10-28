import React from 'react';

const TodosSort = ({userSortId, userIdArr, onSelect}) => {
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