import React from "react";
import {Todo} from "../../types/type";

export interface  TodoContextProps {
    todos: Todo[]
    todoIdEdit: Todo['id'] | null
    checkTodo: (id: Todo['id'])=>void
    deleteTodo: (id: Todo['id'])=>void
    selectTodoIdForEdit: (id: Todo['id'])=>void
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
}

export const TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    todoIdEdit: null,
    addTodo: ()=>{},
    deleteTodo: ()=>{},
    changeTodo: ()=>{},
    selectTodoIdForEdit: ()=>{},
    checkTodo: ()=>{},
})