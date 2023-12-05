"use client";

import { CloseIcon } from "@/components/assets/icons";
import { useRouter } from "@/utils/navigation";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { useParams } from "next/navigation";

export const ActiveFiles = () => {
  const { project, file = "" } = useParams();
  const { push } = useRouter();

  if (!file) return null;

  return (
    <>
      <NavbarItem>
        <Button
          onClick={() => {
            push(`/editor/${project}/${file}` as any);
          }}
          size="sm"
          variant={"ghost"}
          endContent={
            <CloseIcon
              size={18}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          }
        >
          <span>{file}</span>
        </Button>
      </NavbarItem>
    </>
  );
};
