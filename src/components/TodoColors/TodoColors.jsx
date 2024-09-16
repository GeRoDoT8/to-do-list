import React from "react";
import cls from "./TodoColors.module.css";
import Card from "../Card/Card";
const TodoColors = ({ isLoading, data, idx, changeColor }) => {
  return (
    <Card className={`row ${cls.colorList} ${isLoading ? cls.isLoading : ""}`}>
      {data.map((item, index) => (
        <div
          className={`${cls.color} ${index === idx ? cls.colorActive : " "}`}
          style={{ background: item }}
          onClick={() => changeColor(item, index)}
        ></div>
      ))}
    </Card>
  );
};
export default TodoColors;
