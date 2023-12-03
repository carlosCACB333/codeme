"use client";
import { FolderIcon, PlusIcon } from "@/components/assets/icons";
import {
  DirectoryNavigation,
  EditorHeader,
} from "@/components/navigation/editor";
import { DirectoryProvider } from "@/contexts/directory.context";
import { directories } from "@/data/directory-tree";
import { LayoutProps } from "@/interfaces";
import { Button } from "@nextui-org/button";

export default function EditorLayout({
  children,
  params: { project },
}: LayoutProps) {
  return (
    <DirectoryProvider
      initialProps={{
        directories,
      }}
      storageKey={`user-${project}`}
    >
      <div className="h-full flex">
        <div className="bg-content2 w-80 p-4">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <FolderIcon />{" "}
              <span className="text-xs font-bold">PROYECT {project}</span>
            </div>
            <Button isIconOnly size="sm">
              <PlusIcon />
            </Button>
          </div>
          <DirectoryNavigation />
        </div>
        <div className="flex flex-1 w-full flex-col">
          <EditorHeader />
          {children}
        </div>
      </div>
    </DirectoryProvider>
  );
}
