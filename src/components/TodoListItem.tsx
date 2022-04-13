import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onEdit = () => {
    setIsEditOn(true);
  };

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    editTodo(text);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "삭제",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "수정",
      onClick: onEdit,
    },
  ];
  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleComplete(todo)}
        />
        {isEditOn ? (
          <input
            className="edit-input"
            type="text"
            value={inputText}
            onChange={(e) => onTodoUpdate(e)}
          />
        ) : (
          todo.text
        )}
      </label>
      <Dropdown options={dropdownOptions} />
    </li>
  );
};
