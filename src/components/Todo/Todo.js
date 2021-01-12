import React from 'react';

const Todo = ({text, setTodos, todos, todo}) => {
    const deleteButton = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeButton = () => {
        setTodos(todos.map((el) => {
            if ( todo.id === el.id ){
                return { ...el, completed: !el.completed}
            }
            return el
        }))
    };

    const importantButton = () => {
        setTodos(todos.map((el) => {
            if ( todo.id === el.id ){
                return { ...el, important: !el.important}
            }
            return el
        }))
    };

    return (
        <div className='formText'>
            <div className='titleText'> {text} </div>
            <button className='textButton' type='button' onClick={completeButton}> Выполнить </button>
            <button className='textButton' type='button' onClick={importantButton}> Отметить </button>
            <button className='textButton' type='button' onClick={deleteButton}> Удалить </button>
        </div>
    );
};

export default Todo;