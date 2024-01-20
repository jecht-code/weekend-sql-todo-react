import { useState } from 'react';
import { postTodo } from '../../todoApi/todo.api';
import Grid from '@mui/material/Grid';

function AddTodoForm(props) {
    const [taskValue, setTaskValue] = useState('');
    

    const handleSubmitTodo = (event) => {
        event.preventDefault();
        console.log('Values for To Do:', {
            task: taskValue,
            is_complete: false,
        });

        //post data
        postTodo({
            task: taskValue,
            is_complete: false,
        })
            .then((response) => {
                //on success fetch data
                props.todoRefreshCallback();

                setTaskValue('');
                
            })
            .catch((err) => {
                console.error('Error:', err);
            });  
    };

    return (
        <Grid item container>
        <form onSubmit={handleSubmitTodo}>
            <label>
                <span>Task:</span>
                <input 
                id="task"
                onChange={(event) => setTaskValue(event.target.value)}
                value={taskValue} />
            </label>
            <button type="submit">Add</button>
        </form>
        </ Grid>

    ); 
}

export default AddTodoForm;