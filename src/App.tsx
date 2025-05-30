import { Button } from "./components/button";
import "./styles.css";

export function App() {
  return (
    <div className="container">
      <Button name="Criar" onClick={() => console.log("Criar")} />
      <Button name="Editar" />
      <Button name="Excluir" />
    </div>
  );
}
