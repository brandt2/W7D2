import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from "./components/root";
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content');
  const store = configureStore();
  
  window.store = store;
  // window.receiveTodos = receiveTodos;
  // window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;

  ReactDOM.render(
    <Root store={store}/>,
    content
  )
})