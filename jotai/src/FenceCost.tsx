import { useAtom } from "jotai";
import { fenceCostAtom } from "./atoms";

export function FenceCost() {
  const [fenceCost] = useAtom(fenceCostAtom);

  return (
    <div className="row">
      <div>Fence cost (square)</div>
      <div>{fenceCost}</div>
    </div>
  );
}
