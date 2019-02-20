import React from 'react';
import {TodoListItem} from './todo_list/todo_list_item';
import TodoForm from './todo_list/todo_form';

export const TodoList = ({ todos, handleTodo }) => (

  <>
    <ul>
      {todos.map( (todo) => (
        <TodoListItem todo={todo} key={todo.id}/>
      ))}
    </ul>

    <TodoForm handleTodo={handleTodo}/>
  </>
)