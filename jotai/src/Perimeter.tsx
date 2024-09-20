import { useAtom } from "jotai";
import { readOnlyPerimeterAtom } from "./atoms";

export default function Perimeter() {
  const [perimeter] = useAtom(readOnlyPerimeterAtom);

  return (
    <div className="row">
      <div>Perimeter (square)</div>
      <div>{perimeter}</div>
    </div>
  );
}
