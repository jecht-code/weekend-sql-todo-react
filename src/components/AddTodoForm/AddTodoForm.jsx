import { useState } from 'react';
import { postTodo } from '../../todoApi/todo.api';

function AddTodoForm() {
    const [taskValue, setTaskValue] = useState('');
    const [iscompleteValue, setIscompleteValue] = useState('');

    const handleSubmitTodo = (event) => {
        event.preventDefault();
        console.log('Values for To Do:', {
            task: taskValue,
            is_complete: iscompleteValue,
        });

        //post data
        postTodo({
            task: taskValue,
            is_complete: iscompleteValue,
        })
            .then((response) => {
                //on success fetch data
                props.todoRefreshCallback();

                setTaskValue('');
                setIscompleteValue('');
            })
            .catch((err) => {
                console.error('Error:', err);
            });  
    };

    return (
        <form onSubmit={handleSubmitTodo}>
            <label>
                <span>Task:</span>
                <input 
                id="task"
                onChange={(event) => setTaskValue(event.target.value)}
                value={taskValue} />

            </label>

        </form>
    ); 
}

export default AddTodoForm;