import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CmdkStoreProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const useCmdkStore = create<CmdkStoreProps>()(
  devtools(
    (set) => ({
      isOpen: false,
      onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "cmdk-store" }
  )
);
