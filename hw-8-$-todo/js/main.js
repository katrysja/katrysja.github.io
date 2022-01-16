'use strict';

import { getTodoList, postTodoListItem, patchTodoListItem, deleteTodoListItem } from './api.js';

const input = $('.task-new'),
    completed = $('.container .completed'),
    uncompleted = $('.container .uncompleted'),
    
    createTask = (data) => {
        console.log('inside', data);
        const task = $(`<div class="task task-${data.completed ? 'completed' : 'uncompleted'}">`),
            title = $(`<span>${data.title}</span>`),
            remove = $(`<i class="fas fa-trash-alt""></i>`),
            checked = $(`<i class="task-check far fa-check-square"></i>`),
            unchecked = $(`<i class="task-uncheck far fa-square"></i>`);
    
        let container = data.completed ? completed : uncompleted;
    
        remove.click(() => {
            deleteTodoListItem(data.id)
                .done(() => {
                    alert('deleted to-do');
                    task.remove();
                });
        });
    
        checked.add(unchecked).click(() => {
            patchTodoListItem(data.id, {
                // if our item is NOT completed, then comparing with 'false' will
                // change value to vise versa state
                completed: !data.completed
            })
                .done((response) => {
                    // here we should handle response and update our list
                    const isTaskCompleted = response.completed === 'true';
                
                    data.completed = isTaskCompleted;
                    task.removeClass(`task-${isTaskCompleted ? 'uncompleted' : 'completed'}`);
                    task.addClass(`task-${isTaskCompleted ? 'completed' : 'uncompleted'}`);
                
                    container = isTaskCompleted ? completed : uncompleted;
                    container.append(task);
                });
        });
    
        container.append(task);
        task.append(title, remove, checked, unchecked);
    };

getTodoList()
    .done((list) => {
        for (let i = 0; i < 10; i++) {
            createTask(list[i]);
        }
    });

input.on('keyup', (event) => {
    // 13 means enter btn
    if (event.keyCode === 13 && input.val() !== '') {
        postTodoListItem({
            title: input.val(),
            completed: false
        }).done((response) => {
            console.log('outside', response);
            createTask({
                ...response,
                completed: response.completed === 'true'
            });
    
            // to clear the input
            input.val('');
        });
    }
});