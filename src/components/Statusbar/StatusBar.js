import React from 'react';

const StatusBar = ({setStatus}) => {

    const statusHandler = (event) => {
        setStatus(event.target.value)
    };

    return (
        <div className='allButton'>
             <button className='topButton' type='button' onClick={statusHandler} value='all'> Все Задачи </button>
             <button className='topButton' type='button' onClick={statusHandler} value='completed'> Выполненные задачи </button>
             <button className='topButton' type='button' onClick={statusHandler} value='uncompleted'> Невыполненные задачи </button>
             <button className='topButton' type='button' onClick={statusHandler} value='important'> Важные задачи</button>
        </div>
    );
};

export default StatusBar;