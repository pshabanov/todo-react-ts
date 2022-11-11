import React, {useState} from "react";
import {Todo} from "../../types/type";
import {TodoContext} from "./TodoContext";

interface TodoProviderProps {
    children: React.ReactNode
}

const DEFAULT_TODO_LIST = [
    {id: 1, name: 'task 1', description: 'description 1', checked: false},
    {id: 2, name: 'task 2', description: 'description 2', checked: false},
    {
        id: 3,
        name: 'task 3',
        description: 'so long task description? so long task description? so long task description? so long task description',
        checked: true
    }
]

export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST)
    const [todoIdEdit, setTodoForEdit] = useState<Todo['id'] | null>(null)

    const selectTodoIdForEdit = (id: Todo['id']) => {
        setTodoForEdit(id)
    }
    const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([...todos, {id: todos[todos.length - 1].id + 1, description, name, checked: false}])
    }
    const checkTodo = (id: Todo['id']) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, checked: !todo.checked}
            }
            return todo
        }))
    }
    const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoIdEdit) {
                return {...todo, name, description}
            }
            return todo
        }))

        setTodoForEdit(null)
    }
    const deleteTodo = (id: Todo['id']) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const value = React.useMemo(() => ({
        todos,
        todoIdEdit,
        deleteTodo,
        addTodo,
        changeTodo,
        selectTodoIdForEdit,
        checkTodo
    }), [
        todos,
        todoIdEdit,
        deleteTodo,
        addTodo,
        changeTodo,
        selectTodoIdForEdit,
        checkTodo
    ])

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}