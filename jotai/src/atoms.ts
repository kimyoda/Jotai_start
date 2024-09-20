import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// atomWithStorage, key
const sideLengthAtom = atomWithStorage<number>("length", 0);

// readWrite
export const readWriteLengthAtom = atom(
  (get) => get(sideLengthAtom),
  (get, set, length: number) => {
    if (typeof length === "number") {
      set(sideLengthAtom, length);
    }
  }
);

// writeOnly
export const writeOnlyLengthAtom = atom(null, (get, set, length: number) => {
  if (typeof length === "number") {
    set(sideLengthAtom, length);
  }
});

export const priceAtom = atomWithStorage<number>("price", 0);

export const fenceCostAtom = atom(
  (get) => get(sideLengthAtom) * 4 * get(priceAtom)
);

// readOnly
export const readOnlyPerimeterAtom = atom<number>(
  (get) => get(sideLengthAtom) * 4
);

export const readOnlyAreaAtom = atom<number>(
  (get) => get(sideLengthAtom) * get(sideLengthAtom)
);

export const readOnlyVolumeAtom = atom<number>(
  (get) => get(sideLengthAtom) * get(sideLengthAtom) * get(sideLengthAtom)
);

export const jokeAtom = atom({ setup: "", punchline: "" });

export const jokeObjectAtom = atom(
  async (get) => get(jokeAtom),
  async (_get, set, url: string) => {
    const response = await fetch(url);
    set(jokeAtom, await response.json());
  }
);
