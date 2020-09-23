import React, { useContext, useState, useEffect } from "react";
import { Button } from "antd";
import { TodoContext } from "../context/TodoContextProvider";
import { removeTodo, addTodo, setTodos } from "../context/todo.actions";

import { firebaseApi } from "../services/firebaseApi";

const TodoTask = (props) => {
  const [isEditable, setEditable] = useState(false);
  const [currentValue, setCurrentValue] = useState(props.description);
  return (
    <div className="todo-task">
      <input
        className="todo-task__name"
        data-cy="todo-task__name"
        value={currentValue}
        disabled={!isEditable}
        onChange={(event) => setCurrentValue(event.target.value)}
      ></input>
      {!isEditable && (
        <Button
          type="primary"
          shape="round"
          className="todo-task__button"
          data-cy="todo-task__button-edit"
          onClick={() => setEditable(true)}
        >
          Edit
        </Button>
      )}
      {isEditable && (
        <Button
          type="primary"
          shape="round"
          className="todo-task__button"
          data-cy="todo-task__button-update"
          onClick={() => {
            setEditable(false);
            props.update(props.id, currentValue);
          }}
        >
          Update
        </Button>
      )}
      {!isEditable && (
        <Button
          type="primary"
          shape="round"
          className="todo-task__button"
          data-cy="todo-task__button-delete"
          onClick={() => {
            if (!isEditable) props.delete(props.id);
          }}
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export const TodoList = () => {
  const { dispatch } = useContext(TodoContext);
  const { state } = useContext(TodoContext);

  useEffect(() => {
    const fetchTodos = async () => {
      // const todos = await firebaseApi.fetchTodos();
      // dispatch(setTodos(todos));
      await firebaseApi
        .fetchTodos()
        .then((todos) => dispatch(setTodos(todos)))
        .catch((err) => console.log(err));
    };

    fetchTodos();
  }, [dispatch]);

  const handleDeleteTodo = async (id) => {
    await firebaseApi
      .deleteTodo(id)
      .then(() => dispatch(removeTodo(id)))
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = async (id, newValue) => {
    await firebaseApi
      .updateTodo(id, newValue)
      .then(() => dispatch(addTodo(id, newValue)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="todo-list" data-cy="todo-list">
      {Object.entries(state.todos).map(([id, todo]) => (
        <TodoTask
          key={id}
          description={todo.description}
          delete={handleDeleteTodo}
          update={handleUpdateTodo}
          id={id}
        />
      ))}
    </div>
  );
};
