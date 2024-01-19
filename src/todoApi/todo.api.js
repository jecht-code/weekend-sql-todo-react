import axios from 'axios';

export const fetchTodo = () => {
    //axios GET call
    return axios.get('/api/todo');
};

export const postTodo = (todoData) => {
    //axios POST call
    return axios.post('/api/todo', todoData);
};

export const deleteTodo = (todoId) => {
    //axios DELETE call
    return axios.delete(`/api/todo/${todoId}`);
};

export const updateTodo = (todoId) => {
    //axios Put call
    return axios.put(`/api/todo/${todoId}`);
};

