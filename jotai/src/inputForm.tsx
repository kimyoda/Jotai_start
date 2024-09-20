import { useState } from "react";
import "./App.css";
import { useAtom } from "jotai";
import { priceAtom, sideLengthAtom } from "./atoms";

export function InputForm() {
  // atom
  const [, setSideLength] = useAtom(sideLengthAtom);
  const [, setPrice] = useAtom(priceAtom);
  const [value, setValue] = useState({ side_length: 0, price: 0 });

  const handleOnChange = (event: { target: { value: any; name: any } }) => {
    const { name, value } = event.target;
    setValue((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const setPriceAndLength = () => {
    setSideLength(Number(value.side_length));
    setPrice(Number(value.price));
  };

  return (
    <div className="column">
      <input
        className="textbox"
        type="number"
        value={value.side_length}
        name="side_length"
        onChange={handleOnChange}
      />
      <input
        className="textbox"
        type="text"
        placeholder="price"
        value={value.price}
        name="price"
        onChange={handleOnChange}
      />
      <button name="side_length_button" onClick={() => setPriceAndLength()}>
        Set Side Length
      </button>
    </div>
  );
}
