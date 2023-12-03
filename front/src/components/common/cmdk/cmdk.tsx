"use client";
import { cmdk } from "@/components/assets/cmdk";
import { CloseIcon, SearchIcon } from "@/components/assets/icons";
import { SearchItem } from "@/interfaces";
import { useCmdkStore } from "@/stores/cmdk.store";
import {
  RECENT_SEARCHES_KEY,
  addToRecentSearches,
  filterSearches,
} from "@/utils/cmdk";
import { Kbd } from "@nextui-org/kbd";
import { Modal, ModalContent } from "@nextui-org/modal";
import { useLocalStorage } from "@rehooks/local-storage";
import { Command } from "cmdk";
import { isEmpty } from "lodash";

import { useRouter } from "@/utils/navigation";
import { Button } from "@nextui-org/button";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CmdkItem } from "./cmdk-item";

export const Cmdk = () => {
  const { onToggle, isOpen } = useCmdkStore((state) => state);
  const slots = useMemo(() => cmdk(), []);
  const [searchData, setSearchData] = useState<SearchItem[]>([]);
  const [query, setQuery] = useState("");
  const [recents] = useLocalStorage<SearchItem[]>(RECENT_SEARCHES_KEY);
  const [active, setActive] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    fetch("/search-meta.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onToggle();
      }
    };

    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, [onToggle]);

  const results = useMemo<SearchItem[]>(
    () => filterSearches(searchData, query),
    [query, searchData]
  );

  const items = isEmpty(query) ? recents ?? [] : results;
  const item = items[active];
  const itemsLength = items.length;

  const onOpen = useCallback(() => {
    if (!item) return;
    addToRecentSearches(recents, item);
    onToggle();
    setActive(0);
    setQuery("");
    push(item.url as any);
  }, [item, onToggle, push, recents]);
  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          if (active + 1 < itemsLength) {
            setActive(active + 1);
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (active - 1 >= 0) {
            setActive(active - 1);
          }
          break;
        }
        case "Control":
        case "Alt":
        case "Shift": {
          e.preventDefault();
          break;
        }
      }
    },
    [active, itemsLength]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onToggle}
      hideCloseButton
      backdrop="opaque"
      scrollBehavior="inside"
      size="xl"
      classNames={{
        base: [
          "border-small",
          "dark:border-default-100",
          "supports-[backdrop-filter]:bg-background/30",
          "supports-[backdrop-filter]:backdrop-blur-sm",
          "supports-[backdrop-filter]:backdrop-saturate-150",
        ],
        backdrop: ["bg-black/80"],
      }}
    >
      <ModalContent>
        <Command label="Search" className={slots.base()} shouldFilter={false}>
          <div className={slots.header()}>
            <SearchIcon />
            <Command.Input
              autoFocus
              className={slots.input()}
              placeholder="Buscar contenido..."
              value={query}
              onValueChange={(v) => {
                setQuery(v);
                setActive(0);
              }}
              onKeyDown={onInputKeyDown}
            />
            {query && (
              <Button
                className="rounded-full mr-1"
                isIconOnly
                size="sm"
                onClick={() => {
                  setQuery("");
                  setActive(0);
                }}
              >
                <CloseIcon size={16} />
              </Button>
            )}
            <Kbd>ESC</Kbd>
          </div>

          <Command.List role="listbox" className={slots.list()}>
            {isEmpty(items) ? (
              <div className={slots.emptyWrapper()}>
                {isEmpty(query)
                  ? "Empieza a buscar contenido..."
                  : `No se encontraron resultados para "${query}"`}
              </div>
            ) : (
              <Command.Group
                heading={
                  <p className="mt-2">
                    {isEmpty(query)
                      ? "Búsquedas recientes"
                      : "Resultados de búsqueda"}
                  </p>
                }
              >
                {items?.map((item, idx) => (
                  <CmdkItem
                    key={item.objectID}
                    item={item}
                    isActive={idx === active}
                    isRecent
                    onActive={() => setActive(idx)}
                    onOpen={onOpen}
                  />
                ))}
              </Command.Group>
            )}
          </Command.List>
        </Command>
      </ModalContent>
    </Modal>
  );
};

export default Cmdk;
