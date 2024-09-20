import { useState } from "react";
import "./App.css";
import { useAtom } from "jotai";
import { sideLengthAtom } from "./atoms";

export function InputForm() {
  // atom
  const [, setSideLength] = useAtom(sideLengthAtom);

  const [length, setLength] = useState(0);

  const handleOnChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setLength(value);
  };

  return (
    <div className="column">
      <input
        className="textbox"
        type="number"
        value={length}
        name="side_length"
        onChange={handleOnChange}
      />
      <button name="side_length_button" onClick={() => setSideLength(length)}>
        Set Side Length
      </button>
    </div>
  );
}
