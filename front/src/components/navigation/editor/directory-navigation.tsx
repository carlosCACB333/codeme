"use client";

import { useDirectory } from "@/hooks";
import dynamic from "next/dynamic";

const DirectoryTreeDynamically = dynamic(
  () => import("./directory-tree").then((mod) => mod.DirectoryTree),
  {
    ssr: false,
  }
);
export const DirectoryNavigation = () => {
  const directories = useDirectory((state) => state.directories);
  return (
    <div className="flex flex-col">
      {directories.map((directory) => (
        <DirectoryTreeDynamically
          key={directory.id}
          directory={directory}
          isLevel0
        />
      ))}
    </div>
  );
};
