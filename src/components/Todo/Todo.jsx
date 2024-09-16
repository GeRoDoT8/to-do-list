import { useState } from "react";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import TodoList from "../TodoList/TodoList";
import cls from "./Todo.module.css";
import TodoColors from "../TodoColors/TodoColors";

const colorsData = [
  "#FF6A6A",
  "#24BCFF",
  "#FF8C21",
  "#797979",
  "#BF00CF",
  "#86FD99",
  "#A46C00",
  "#F7D5CA",
  "#608B67",
];
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [colors, setColors] = useState({
    color: "#FF6A6A",
    idx: 0,
  });

  const todosActive = todos.filter((item) => !item.isComplete);
  const todosNoActive = todos.filter((item) => item.isComplete);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    setIsLoading(true);

    const newItem = {
      id: todos.length + 1,
      text: text,
      isComplete: false,
      bg: colors.color,
    };

    await new Promise((res) => {
      setTimeout(() => {
        res(setTodos([...todos, newItem]));
      }, 1000);
    });

    setText("");
    setIsLoading(false);
  };

  const deleteTodo = async (id) => {
    setIsLoading(true);

    await new Promise((res) => {
      setTimeout(() => {
        const newData = todos.filter((item) => item.id !== id);

        res(setTodos(newData));
      }, 1000);
    });
    setIsLoading(false);
  };

  const handleIsCompelte = async (id) => {
    setIsLoading(true);
    const newData = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }

      return item;
    });

    await new Promise((res) => {
      setTimeout(() => {
        res(setTodos(newData));
      }, 1000);
    });

    setIsLoading(false);
  };
  const changeColor = (item, index) => {
    setColors({ color: item, idx: index });
  };

  return (
    <div className={cls.todo}>
      <Card className={`${isLoading ? "isLoading" : ""}`}>
        <div className={cls.form}>
          <div className={`row`}>
            <input
              className={`${cls.input} `}
              value={text || ""}
              type="text"
              placeholder="Введите задачу..."
              onChange={handleChange}
            />
            <button
              disabled={!text}
              className={` ${cls.btn} ${isLoading ? cls.isLoading : ""}`}
              onClick={addTodo}
            >
              Send
            </button>
          </div>
          <div className={`${cls.formResult} row`}>
            <div>
              <img src={Icon1} alt="" />
              <span>Активные: {todosActive.length}</span>
            </div>
            {isLoading && (
              <div className={cls.spinner}>
                <Spinner />
              </div>
            )}
            <div>
              <img src={Icon2} alt="" />
              <span>Завершенные: {todosNoActive.length}</span>
            </div>
          </div>
        </div>
      </Card>

      <TodoColors
        isLoading={isLoading}
        data={colorsData}
        idx={colors.idx}
        changeColor={changeColor}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        handleIsCompelte={handleIsCompelte}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Todo;
