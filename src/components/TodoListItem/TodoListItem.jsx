import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';

import {
    deleteTodo,
    updateTodo,
} from '../../todoApi/todo.api';

function TodoListItem({ todoData, todoRefreshCallback }) {
    const handleClickToggleComplete = (id) => {
        updateTodo(id)
            .then((response) => {
                todoRefreshCallback();
            })
            .catch((err) => {
                console.error('ERROR:', err);
            });
    };

    const handleClickDelete = (id) => {
        //id item
        console.log('Delete - to do list,', id);
        //Make axios call
        deleteTodo(id)
            .then((response) => {
                todoRefreshCallback();
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    };

    return (
        <Grid 
            item
            container sx={{marginTop: 0, paddingTop: 0, backgroundColor: todoData.is_complete ? 'red':'white' }}
        >
            {todoData.is_complete && <i>✓</i>}
            <h3>{todoData.task}</h3>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={(event) => {
                    event.preventDefault();
                    handleClickDelete(todoData.id);
                }}
            >
            Delete    
            </Button>

            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={(event) => {
                    event.preventDefault();
                    handleClickToggleComplete(todoData.id);
                }}
            >
            {todoData.is_complete ? 'Undo' : 'Complete'}
            </Button>
            
        </Grid>
    )
}

export default TodoListItem;