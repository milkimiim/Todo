import React from 'react';
import Todo from "../Todo";

const TodoList = ({ todos, setTodos,changedTodos }) => {
    return (
        <div className='container'>
                {changedTodos.map((todo) => (
                    <Todo   key={todo.id}
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                            text={todo.text}
                    /> ))}
        </div>
    );
};

export default TodoList;