import { useAtom } from "jotai";
import { sideLengthAtom } from "./atoms";

export default function Perimeter() {
  const [sideLength] = useAtom(sideLengthAtom);

  return (
    <div className="row">
      <div>Perimeter (square)</div>
      <div>{4 * sideLength}</div>
    </div>
  );
}
