import { useAtom } from "jotai";
import { sideLengthAtom } from "./atoms";

export function Area() {
  const [sideLength] = useAtom(sideLengthAtom);

  return (
    <div className="row">
      <div>Area (square)</div>
      <div>
        <div>{sideLength * sideLength}</div>
      </div>
    </div>
  );
}
