import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo === selectedTodo) return { ...todo, complete: !todo.complete };
      return todo;
    });
    setTodos(updateTodos);
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updateTodos: Array<Todo> = todos.filter(
      (todo) => todo.text !== todoToRemove.text
    );
    setTodos(updateTodos);
  };

  const editTodo: EditTodo = (todoToEdit) => {
    let todoToUpdateIndex: number = todos.findIndex(
      (todo) => todo.text === todoToEdit.text
    );
    console.log(todoToUpdateIndex);
  };

  return (
    <div className="todo-app">
      <h1>TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
