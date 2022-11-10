import React from 'react'
import {Todo} from "../../types/type";
import {TodoItem} from "./TodoItem/TodoItem";
import {TodoPanel} from "../TodoPanel/TodoPanel";


interface TodoListProps {
    todos: Todo[]
    todoIdEdit: Todo['id'] | null
    checkTodo: (id: Todo['id'])=>void
    deleteTodo: (id: Todo['id'])=>void
    selectTodoIdForEdit: (id: Todo['id'])=>void
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
}

export const TodoList:React.FC<TodoListProps> = ({todos, checkTodo, deleteTodo, selectTodoIdForEdit, todoIdEdit, changeTodo}) => {
    return <div>
        {todos.map((todo)=>
            {
                if(todo.id === todoIdEdit)
                    return <TodoPanel
                        mode='edit'
                        key={todo.id}
                        changeTodo={changeTodo}
                        editTodo={{name: todo.name, description: todo.description}}/>
                return (<TodoItem
                        key={todo.id}
                        todo={todo}
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                        selectTodoIdForEdit={selectTodoIdForEdit}
                    />
                )
            }
            )}
    </div>
}