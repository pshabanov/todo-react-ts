import React from 'react'
import { TodoItem } from './TodoItem/TodoItem'
import { TodoPanel } from '../TodoPanel/TodoPanel'
import { useTodo } from '../../utils/contextes'


export const TodoList: React.FC = () => {
    const {todos, todoIdEdit, checkTodo, deleteTodo, selectTodoIdForEdit} = useTodo()

    return <div>
        { todos.map((todo) => {
                if (todo.id === todoIdEdit)
                    return <TodoPanel
                        mode="edit"
                        key={ todo.id }
                        editTodo={ {name: todo.name, description: todo.description} }/>
                return (<TodoItem
                        key={ todo.id }
                        todo={ todo }
                        checkTodo={ checkTodo }
                        deleteTodo={ deleteTodo }
                        selectTodoIdForEdit={ selectTodoIdForEdit }
                    />
                )
            },
        ) }
    </div>
}