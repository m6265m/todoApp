import React from "react";
import { IToDo } from "../types/todoTypes";
import { createContainer } from "unstated-next";

export const useTodoStore = () => {
  const [value, setValue] = React.useState<string>("");
  const [toDoList, setToDos] = React.useState<IToDo[]>([]);
  const [error, showError] = React.useState<Boolean>(false);

  const handleOnChangeText = (e: string): void => {
    setValue(e);
    showError(false);
  };

  const handleAddTask = (): void => {
    if (value.trim())
      setToDos([...toDoList, { text: value, completed: false }]);
    else showError(true);
    setValue("");
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return {
    value,
    toDoList,
    error,
    handleOnChangeText,
    handleAddTask,
    removeItem,
    toggleComplete,
  };
};

export const TodoContainer = createContainer(useTodoStore);
