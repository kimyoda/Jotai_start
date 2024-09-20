import "./App.css";
import { Area } from "./Area";
import { FenceCost } from "./FenceCost";
import { InputForm } from "./InputForm";
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
        <FenceCost />
      </div>
    </div>
  );
}

export default App;
