import { atom } from "jotai";

export const sideLengthAtom = atom<number>(0);
export const priceAtom = atom<number>(0);

export const fenceCostAtom = atom(
  (get) => get(sideLengthAtom) * 4 * get(priceAtom)
);
