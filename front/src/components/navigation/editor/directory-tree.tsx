"use client";
import {
  ArticleIcon,
  ChevronRightIcon,
  FolderIcon,
} from "@/components/assets/icons";
import { DirectoryTree as D } from "@/data/directory-tree";
import { useRouter } from "@/utils/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";

export const DirectoryTree = ({
  directory,
  isLevel0 = false,
}: {
  directory: D;
  isLevel0?: boolean;
}) => {
  const { push } = useRouter();
  const { project } = useParams();
  const [active, setActive] = useState(false);

  const isFile = directory.type === "file";

  return (
    <div
      className={clsx("flex flex-col gap-2", {
        "pl-4": !isLevel0,
      })}
    >
      <div
        className={clsx("flex hover:opacity-70 cursor-pointer", {})}
        onClick={() => {
          setActive(!active);
          if (isFile) {
            push(`/editor/${project}/${directory.name}` as any);
          }
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(directory);
        }}
      >
        {isFile ? (
          <ArticleIcon size={18} className="ml-1" />
        ) : (
          <>
            <ChevronRightIcon
              size={20}
              className={clsx({
                "transform rotate-90": active,
              })}
            />
            <FolderIcon size={18} />
          </>
        )}
        <span className="text-xs font-bold ml-1">{directory.name}</span>
      </div>
      {!isFile && (
        <motion.div
          className={clsx("flex flex-col gap-2")}
          variants={{
            hidden: {
              opacity: 0,
              display: "none",
              height: 0,
            },
            visible: {
              opacity: 1,
              display: "flex",
              height: "auto",
            },
          }}
          initial={false}
          animate={active ? "visible" : "hidden"}
        >
          {directory.children?.map((child) => (
            <DirectoryTree key={child.id} directory={child} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DirectoryTree;
