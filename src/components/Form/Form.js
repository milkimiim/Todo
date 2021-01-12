import React from 'react';


const Form = ({inputText,setInputText ,todos, setTodos}) => {
    const formSubmit = (e) => {
        e.preventDefault();
        setTodos(
            [...todos,
                {text: inputText,
                 completed: false,
                 important: false,
                 id: Math.floor( Math.random()* 1000 )}]);
        setInputText('')
    };

    return (
        <form className='formName' onSubmit={formSubmit}>
            <input className='inputName' type="text" placeholder='запишите свою задачу' required value={inputText} onChange={(e) => setInputText(e.target.value) }/>
            <button className='buttonName' type='submit'>Ok</button>
        </form>
    );
};

export default Form;