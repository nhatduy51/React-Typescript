import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todos } from './todos.model';
const App: React.FC = () => {

  const [todos, setTodos] = React.useState<Todos[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  }

  const todoDeleteHandler = (idTodo: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter( todo => todo.id !== idTodo);
    })
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
