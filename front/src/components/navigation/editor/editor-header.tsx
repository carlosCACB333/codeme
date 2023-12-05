"use client";
import { PlayIcon } from "@/components/assets/icons";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import dynamic from "next/dynamic";

const ActiveFileDynamically = dynamic(
  () => import("./active-files").then((mod) => mod.ActiveFiles),
  {
    // ssr: false,
  }
);

interface Props {
  onClick: () => void;
  isLoading: boolean;
}

export const EditorHeader = ({ onClick, isLoading }: Props) => {
  return (
    <Navbar maxWidth="full" className="">
      <div className="w-full grid gap-4 grid-cols-auto-1fr ">
        <NavbarContent className="overflow-x-auto scroll flex gap-1">
          <ActiveFileDynamically />
        </NavbarContent>
        <NavbarContent className="" justify="end">
          <NavbarItem>
            <Button
              size="lg"
              isIconOnly
              onClick={onClick}
              isLoading={isLoading}
            >
              <PlayIcon />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};
