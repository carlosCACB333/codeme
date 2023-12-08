import { directories } from "@/data/directory-tree";
import dynamic from "next/dynamic";

const DirectoryTreeDynamically = dynamic(() => import("./directory-tree"), {
  ssr: false,
});

export const DirectoryNavigation = () => {
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
