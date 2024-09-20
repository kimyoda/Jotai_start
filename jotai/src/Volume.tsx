import { useAtom } from "jotai";
import { readOnlyVolumeAtom } from "./atoms";

export function Volume() {
  const [volume] = useAtom(readOnlyVolumeAtom);

  return (
    <div className="row">
      <div>Volume (cube)</div>
      <div>{volume}</div>
    </div>
  );
}
