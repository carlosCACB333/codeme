import { DirectoryContext } from "@/contexts/directory.context";
import { DirectoryState } from "@/stores/directory.store";
import { useContext } from "react";
import { useStore } from "zustand";

export function useDirectory<T>(selector: (state: DirectoryState) => T): T {
  const store = useContext(DirectoryContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector);
}
