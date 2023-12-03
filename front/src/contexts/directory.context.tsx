"use client";

import {
  DirectoryProps,
  DirectoryStore,
  createDirectoryStore,
} from "@/stores/directory.store";
import { PropsWithChildren, createContext, useRef } from "react";

export const DirectoryContext = createContext<DirectoryStore | null>(null);

interface Props extends PropsWithChildren {
  initialProps: Partial<DirectoryProps>;
  storageKey: string;
}

export const DirectoryProvider = ({
  initialProps,
  children,
  storageKey,
}: Props) => {
  const store = useRef(createDirectoryStore(initialProps, storageKey)).current;
  return (
    <DirectoryContext.Provider value={store}>
      {children}
    </DirectoryContext.Provider>
  );
};
