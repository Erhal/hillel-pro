import React, {useMemo} from 'react';

const TodosPagination = ({page, setPage, sortedList}) => {
    const paginationNumbers = useMemo(() => sortedList.length > 20 ? Math.ceil(sortedList.length / 20) : 1, [sortedList]);

    return (
        <div className="todos__pagination todos-pagination">
            {
                [...Array(paginationNumbers)].map((_, index) => (
                    <button key={index}
                            className={`todos-pagination__item ${(page === index + 1) && 'todos-pagination__item--active'}`}
                            onClick={() => setPage(index + 1)}
                    >
                        <span className='todos-pagination__text'>{index + 1}</span>
                    </button>
                ))
            }
        </div>
    );
};

export default TodosPagination;