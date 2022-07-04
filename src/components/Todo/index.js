import todo from "../../store/todo";
import "./index.css";
import { observer } from "mobx-react-lite";

const Todo = observer(() => {
   
    return (
        <>
            <button onClick={() => todo.fetchTodo()}>fetch todo</button>
           {todo.todos.map(t => 
                <div className="todo" key={t.id}>
                    
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                    <p>{t.title}</p>
                    <button onClick={() => todo.removeTodo(t.id)}>x</button>
                </div>
            )}
        </>
    )
});

export default Todo;