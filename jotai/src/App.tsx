import "./App.css";
import { Area } from "./Area";
import { InputForm } from "./inputForm";
import Perimeter from "./Perimeter";
import { Volume } from "./Volume";

function App() {
  return (
    <div>
      <InputForm />
      <div className="column">
        <Area />
        <Perimeter />
        <Volume />
      </div>
    </div>
  );
}

export default App;
