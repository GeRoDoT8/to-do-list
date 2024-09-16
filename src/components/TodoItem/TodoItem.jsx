import Delete from "../../assets/Delete.svg";
import Edit from "../../assets/Edit.svg";
import Card from "../Card/Card";
import cls from "./TodoItem.module.css";
const TodoItem = (props) => {
  const {
    todo,
    deleteTodo,
    handleIsCompelte,
    loadingClassName,
    isCompleteClassName,
  } = props;
  return (
    <li
      className={`${cls.listItem} ${isCompleteClassName}  ${loadingClassName}`}
    >
      <Card className={cls.todoItemCard}>
        <span
          style={{ background: todo.bg }}
          className={cls.todoItemColor}
        ></span>
        <p>{todo.text}</p>
        <div className="row">
          <img
            className={!todo.isComplete ? cls.deleteIconDisab : ""}
            onClick={() => deleteTodo(todo.id)}
            src={Delete}
            alt=""
          />
          <img onClick={() => handleIsCompelte(todo.id)} src={Edit} alt="" />
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
