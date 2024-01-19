import { useState, useEffect } from 'react';

import { fetchTodo } from '../../todoApi/todo.api';
import Header from '../Header/Header';
import AddTodoForm from '../AddTodoForm/AddtodoForm';
import { response } from 'express';

function App () {
  const [todoList, setTodoList] = useState([]);

  const refreshTodo = () => {
    const todoPromise = fetchTodo();
    todoPromise
      //success
      .then((response) => {
        console.log('SERVER DATA:', response);
        setTodoList(response.data);
      })
      //failure
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  //initial load of the components
  useEffect(() => {
    //body of effect
    console.log('initial load');
    //api call
    refreshTodo();
  }, []);

  return (
    <div>
      <Header title="TO DO LIST!"/>

      <main>
        <AddTodoForm todoRefreshCallback={refreshTodo} />

        {/* We render To Do List here */}
        
      </main>
    </div>
  );

}

export default App
