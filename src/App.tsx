import "./global.css";
import { useState } from "react";
import { Button } from "./components/button";
import styles from "./app.module.css";
//import { useMessage } from "./hooks/useMessage";

export function App() {
  const [count, setCount] = useState(0);

  //const { show } = useMessage({name: "Bruno"});

  function handleAdd() {
    setCount((prevState) => prevState + 1);
  }

  function handleRemove() {
    setCount((prevState) => prevState - 1);
  }
  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Excluir" onClick={handleRemove} />
    </div>
  );
}
