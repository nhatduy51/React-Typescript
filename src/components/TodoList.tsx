import React from "react";
import './TodoList.css';

interface TodosProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (is: string) => void
}

const TodoList: React.FC<TodosProps> = (props) => {
    const onDelete = (id: string) => {
        props.onDeleteTodo(id);
    }
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button 
                        onClick={() => onDelete(todo.id)}>
                        DELETE
                    </button>
                </li>
            ))}
        </ul>
    );
}
export default TodoList;
