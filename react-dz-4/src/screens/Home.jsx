import React, {useContext} from "react";
import Todo from "../components/Todo";
import AppContext from "../providers/AppContext";

function Home() {

    const {todos, inputRef, addTodo} = useContext(AppContext);

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
                    {todos.map(task => <Todo task={task} key={task.id}/>)}
                    </tbody>

                }
            </table>
        </div>
    );
}

export default Home;
