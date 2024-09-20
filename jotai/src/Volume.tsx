import { useAtom } from "jotai";
import { sideLengthAtom } from "./atoms";

export function Volume() {
  const [sideLength] = useAtom(sideLengthAtom);

  return (
    <div className="row">
      <div>Volume (cube)</div>
      <div>{sideLength * sideLength * sideLength}</div>
    </div>
  );
}
