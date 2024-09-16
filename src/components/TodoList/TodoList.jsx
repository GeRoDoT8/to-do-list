import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Card from "../Card/Card";
import cls from "./TodoList.module.css";
const TodoList = (props) => {
  const { todos, deleteTodo, handleIsCompelte, isLoading } = props;
  return (
    <div className={cls.list}>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              handleIsCompelte={handleIsCompelte}
              loadingClassName={isLoading ? "isLoading" : ""}
              isCompleteClassName={todo.isComplete ? cls.itemComplete : ""}
            />
          ))
        ) : (
          <Card className={cls.empty}>Задач пока нет</Card>
        )}
      </ul>
    </div>
  );
};
export default TodoList;
