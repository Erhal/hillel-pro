import React, {useState, createRef} from "react";
import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [todos, setTodos] = useState([]);

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
            <div className='d-flex flex-column align-items-center mt-3'>
                {!todos.length ? <div className='text-center'>No todos</div> :
                todos.map(task => <Todo task={task} onChange={onChange} onDelete={onDelete} key={task.id}/>)}
            </div>
        </div>
    );
}

export default App;
