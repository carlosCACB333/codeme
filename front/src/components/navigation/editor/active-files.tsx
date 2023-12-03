"use client";

import { CloseIcon } from "@/components/assets/icons";
import { useDirectory } from "@/hooks";
import { useRouter } from "@/utils/navigation";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { useParams } from "next/navigation";

export const ActiveFiles = () => {
  const activeFiles = useDirectory((state) => state.activeFiles);
  const removeActiveFile = useDirectory((state) => state.removeActiveFile);
  const { project, file = "" } = useParams();
  const { push } = useRouter();

  return (
    <>
      {activeFiles.map((f) => (
        <NavbarItem key={f.id}>
          <Button
            onClick={() => {
              push(`/editor/${project}/${f.id}` as any);
            }}
            size="sm"
            variant={f.id === file ? "ghost" : "light"}
            endContent={
              <CloseIcon
                size={18}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeActiveFile(f.id);
                }}
              />
            }
          >
            <span>{f.name}</span>
          </Button>
        </NavbarItem>
      ))}
    </>
  );
};
