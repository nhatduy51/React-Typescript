import React, { useRef } from "react";
import './NewTodo.css';

type newTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<newTodoProps> = (porps) => {

    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        porps.onAddTodo(enteredText);
    }
    return (
        <form onSubmit={todoSubmit}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
}
export default NewTodo;