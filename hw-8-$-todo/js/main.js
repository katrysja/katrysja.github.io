'use strict';

import { getTodoList, getTodoListItem, patchTodoListItem, deleteTodoListItem } from './api.js';

const completed = $('.container .completed'),
    incompleted = $('.container .uncompleted');

getTodoList()
    .done((list) => {
        for (let i = 0; i < 10; i++) {
            const data = list[i],
                task = $(`<div class="task task-${data.completed ? 'completed' : 'uncompleted'}">`),
                title = $(`<span>${data.title}</span>`),
                remove = $(`<i class="fas fa-trash-alt""></i>`),
                checked = $(`<i class="task-check far fa-check-square"></i>`),
                unchecked = $(`<i class="task-uncheck far fa-square"></i>`);
            
            let container = data.completed ? completed : incompleted;
    
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
    
                        container = isTaskCompleted ? completed : incompleted;
                        container.append(task);
                    });
            });
            
            container.append(task);
            task.append(title, remove, checked, unchecked);
        }
    });

getTodoListItem(1)
    .done((data) => {
        console.log(data);
    });

 $('.txtb').on('keyup', (e) => {
    // 13 means enter btn
    if (e.keyCode == 13 && $('.txtb').val() != '') {
        let task = $('<div class="task"></div>').text($('.txtb').val());
        let del = $('<i class="fas fa-trash-alt"></i>').click(function () {
             let p = $(this).parent();
            p.fadeOut(function () {
                 p.remove();
             })
        });
         let check = $('<i class="fas fa-check"></i>').click(function () {
             let p = $(this).parent();p.fadeOut(function () {
                 $('.comp').append(p);
                 p.fadeIn();
             });
             $(this).remove();
         });

         task.append(del, check);
         $('.notcomp').append(task);
         // to clear the input
         $('.txtb').val('');
     }

 });
 