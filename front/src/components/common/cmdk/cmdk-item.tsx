import { cmdk } from "@/components/assets/cmdk";
import {
  ArticleIcon,
  ChevronRightIcon,
  HashIcon,
  SearchIcon,
} from "@/components/assets/icons";
import { SearchItem } from "@/interfaces";
import { Command } from "cmdk";
import { useMemo } from "react";

interface Props {
  item: SearchItem;
  isRecent?: boolean;
  onActive: () => void;
  onOpen: () => void;
  isActive: boolean;
}

export const CmdkItem = ({
  item,
  isActive,
  isRecent,
  onActive,
  onOpen,
}: Props) => {
  const isLvl1 = item.type === "lvl1";
  const slots = useMemo(() => cmdk({ class: "bg-success" }), []);

  const mainIcon = isRecent ? (
    <SearchIcon className={slots.leftIcon()} size={20} strokeWidth={2} />
  ) : isLvl1 ? (
    <HashIcon className={slots.leftIcon()} />
  ) : (
    <ArticleIcon className={slots.leftIcon()} />
  );

  return (
    <Command.Item
      key={item.objectID}
      className={slots.itemWrapper()}
      data-active={isActive}
      value={item.content}
      onMouseEnter={onActive}
      onSelect={onOpen}
    >
      <div className={slots.leftWrapper()}>
        {mainIcon}
        <div className={slots.itemContent()}>
          {!isLvl1 && (
            <span className={slots.itemParentTitle()}>
              {item.hierarchy.lvl1}
            </span>
          )}
          <p className={slots.itemTitle()}>{item.content}</p>
        </div>
      </div>
      <ChevronRightIcon className="text-foreground/90" size={20} />
    </Command.Item>
  );
};
