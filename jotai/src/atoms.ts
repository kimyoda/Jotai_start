import { atom } from "jotai";

export const sideLengthAtom = atom<number>(0);
export const priceAtom = atom<number>(0);

export const fenceCostAtom = atom(
  (get) => get(sideLengthAtom) * 4 * get(priceAtom)
);

export const readOnlyPerimeterAtom = atom<number>(
  (get) => get(sideLengthAtom) * 4
);

export const readOnlyAreaAtom = atom<number>(
  (get) => get(sideLengthAtom) * get(sideLengthAtom)
);

export const readOnlyVolumeAtom = atom<number>(
  (get) => get(sideLengthAtom) * get(sideLengthAtom) * get(sideLengthAtom)
);
