import React, { useCallback, useState } from "react";
import Todos from "./Todos";
import TodosClass from "./TodosClass";
import TodosNormClass from "./TodosNormClass";

export const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const multiply = (x, y) => {
    return x * y;
  };
  // const cachedValue = useMemo(() => multiply(x, y), [x, y]);

  return (
    <div>
      <h1>Hi lazy</h1>
      {/* <Todos todos={todos} addTodo={addTodo} />
      <TodosClass todos={todos} addTodo={addTodo} />
      <TodosNormClass todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
    </div>
  );
};
