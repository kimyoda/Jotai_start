import { useAtom } from "jotai";
import { readOnlyAreaAtom } from "./atoms";

export function Area() {
  const [area] = useAtom(readOnlyAreaAtom);

  return (
    <div className="row">
      <div>Area (square)</div>
      <div>
        <div>{area}</div>
      </div>
    </div>
  );
}
