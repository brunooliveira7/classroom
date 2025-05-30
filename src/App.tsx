import { Button } from "./components/button";

export function App() {
  return (
    <div>
      <Button name="Criar" onClick={() => console.log("Criar")} />
      <Button name="Editar" />
      <Button name="Excluir" />
    </div>
  );
}
