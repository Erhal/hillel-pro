import React, {createRef, useContext} from "react";
import Todo from "../components/Todo";
import AppContext from "../providers/AppContext";

function Home() {

    const {todos, setTodos} = useContext(AppContext);

    const onChange = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    const addTodo = (title, key) => {
        if (key === 'Enter' && title.trim()) {
            setTodos([...todos, {id: (todos.at(-1)?.id + 1 || 1), title, completed: false}]);
            inputRef.current.value = "";
        }
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const inputRef = createRef();

    return (
        <div>
            <div className='text-center'>
                <h1>Todos</h1>
                <input className='text-center' ref={inputRef} type="text"
                       onKeyDown={(keyDown) => addTodo(inputRef.current.value, keyDown.key)}/>
            </div>
            <table className='mx-auto mt-4'>
                {!todos.length ?

                    <tbody className='text-center'>
                    <tr><td>No todos</td></tr>
                    </tbody> :

                    <tbody>
                    {todos.map(task => <Todo {...{task, onChange, onDelete}} key={task.id}/>)}
                    </tbody>

                }
            </table>
        </div>
    );
}

export default Home;
