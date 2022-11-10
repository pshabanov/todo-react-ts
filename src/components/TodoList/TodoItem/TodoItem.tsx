import {Todo} from "../../../types/type";
import React from "react";
import styles from './TodoItem.module.css'
import {Button} from "../../Button/Button";

interface TodoItemProps {
    todo: Todo,
    checkTodo: (id: Todo['id'])=>void,
    deleteTodo: (id: Todo['id'])=>void,
}

export const TodoItem: React.FC<TodoItemProps> = ({todo,checkTodo, deleteTodo}) => {
    return <div className={styles.todo_item_container}>
        <div>
            <div aria-hidden
                 className={styles.todo_item_title}
                 style={{
                     opacity: todo.checked ? 0.5 : 1,
                     textDecoration: todo.checked ? 'line-through' : 'none',
                 }}
                 onClick={()=>checkTodo(todo.id)}
            >
                {todo.name}
            </div>
            <div aria-hidden className={styles.todo_item_description}>
                {todo.description}
            </div>
        </div>
        <div className={styles.todo_item_button_container}>
            <Button color='orange'>Edit</Button>
            <Button color='red' onClick={()=>deleteTodo(todo.id)}>Delete</Button>
        </div>
    </div>
}