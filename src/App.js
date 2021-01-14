import React, { useState , useEffect } from 'react'
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

function App()  {
    const [inputText,setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all')
    const [ changedTodos, setChangedTodos] = useState([]);
    const [ search , setSearch ] = useState('')

    useEffect(()=>{
        getTodos()
    },[]);

    useEffect(() => {
        filterTodos();
        saveTodos();
    },[status,todos]);

    const filterTodos = () => {
        switch ( status ) {
            case 'completed': setChangedTodos(todos.filter(item => item.completed))
                break;
            case 'important': setChangedTodos(todos.filter(item => item.important))
                break;
            case 'uncompleted': setChangedTodos(todos.filter(item => !item.completed))
                break;
            default: setChangedTodos(todos)
                break;
        }
    };

    const saveTodos = () => {
            localStorage.setItem('todo', JSON.stringify(todos))
    };

    const getTodos = () => {
        if (localStorage.getItem('todo') === null){
            localStorage.setItem('todo', JSON.stringify([]))
        }
        else{
           setTodos(JSON.parse(localStorage.getItem('todo')))
        }
    };

  return (
    <div className="App">
        <h1 className='title'> Список Проектов </h1>
        <Search setSearch={setSearch} search={search} setStatus={setStatus}/>
        <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
        <TodoList changedTodos={changedTodos} todos={todos} setTodos={setTodos} search={search}/>
    </div>
  );
}

export default App;
