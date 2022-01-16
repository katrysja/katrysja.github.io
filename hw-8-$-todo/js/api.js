const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getTodoList() {
    return $.get(`${BASE_URL}/todos`);
}

export function getTodoListItem(id) {
    return $.ajax(`${BASE_URL}/todos/${id}`);
}

export function postTodoListItem(data) {
    return $.ajax({
        type: 'POST',
        url: `${BASE_URL}/todos/`,
        data
    });
}

export function patchTodoListItem(id, data) {
    return $.ajax({
        type: 'PATCH',
        url: `${BASE_URL}/todos/${id}`,
        data
    });
}

export function deleteTodoListItem(id) {
    return $.ajax({
        type: 'DELETE',
        url: `${BASE_URL}/todos/${id}`
    });
}