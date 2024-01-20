import Grid from '@mui/material/Grid';

import TodoListItem from '../TodoListItem/TodoListItem';


function TodoList({ todoList, todoRefreshCallback }) {
    return (
        <Grid item container spacing={1} sx={{marginTop: 0, paddingTop: 0}}>
            {todoList.map((todoData) => {
                return (
                    <TodoListItem
                        key={todoData.id}
                        todoData={todoData}
                        todoRefreshCallback={todoRefreshCallback}
                    />
                );
            })}
        </Grid>
    );
}

export default TodoList;