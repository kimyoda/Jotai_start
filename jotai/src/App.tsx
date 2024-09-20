import { useAtom } from "jotai";
import "./App.css";
import { Area } from "./Area";
import { FenceCost } from "./FenceCost";
import { InputForm } from "./InputForm";
import Perimeter from "./Perimeter";
import { Volume } from "./Volume";
import { jokeObjectAtom } from "./atoms";
import { Suspense } from "react";

function AsyncComponent() {
  const [joke, setJoke] = useAtom(jokeObjectAtom);
  return (
    <div>
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
      <button onClick={() => setJoke("/random_joke")}>농담 생성기</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Suspense fallback={<span>loading...</span>}>
        <AsyncComponent />
      </Suspense>
      <br />
      <div className="row">
        <div>
          <InputForm />
        </div>
        <div className="column">
          <Area />
          <Perimeter />
          <Volume />
          <FenceCost />
        </div>
      </div>
    </>
  );
}

export default App;
