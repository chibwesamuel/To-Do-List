export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface TodoState {
    todos: Todo[];
  }
  
  export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
  }
  
  export interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO;
    payload: string;
  }
  
  export interface ToggleTodoAction {
    type: TodoActionTypes.TOGGLE_TODO;
    payload: number;
  }
  
  export type TodoAction = AddTodoAction | ToggleTodoAction;
  