import { TodoActionTypes, AddTodoAction, ToggleTodoAction } from '../types/types';

let nextTodoId = 0;

export const addTodo = (text: string): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: id,
});
