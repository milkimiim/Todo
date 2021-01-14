import React from 'react';
import Todo from "../Todo";

const TodoList = ({ todos, setTodos,changedTodos,search }) => {
    return (
        <div className='container'>
                {changedTodos.filter(el => el.text.includes(search)).map((todo) => (
                    <Todo   key={todo.id}
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                            text={todo.text}
                            search={search}
                    /> ))}
        </div>
    );
};

export default TodoList;