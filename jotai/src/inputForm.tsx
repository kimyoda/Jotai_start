import { useState } from "react";
import "./App.css";

export function InputForm() {
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
      <button name="side_length_button">Set Side Length</button>
    </div>
  );
}
