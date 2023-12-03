import {
  ChevronRightIcon,
  ConfigIcon,
  PlusIcon,
} from "@/components/assets/icons";
import { LayoutProps } from "@/interfaces";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export default function EditorLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen gap-1">
      <div className="flex flex-col justify-between bg-content1 px-2 py-4">
        <div className="flex flex-col gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <Link
              key={item}
              href={("/editor/" + item) as any}
              className={clsx(
                "rounded-xl bg-primary-500 flex items-center",
                "justify-center h-unit-12 w-unit-12",
                "text-white font-bold text-sm",
                "hover:opacity-80"
              )}
            >
              P{item}
            </Link>
          ))}
          <Button isIconOnly size="lg">
            <PlusIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Button isIconOnly color="default" size="lg">
            <ConfigIcon />
          </Button>

          <Avatar size="sm" name="Carlos Castillo" isBordered color="primary" />

          <Button href="/" className="" as={Link} isIconOnly>
            <ChevronRightIcon className="transform rotate-180" />
          </Button>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
