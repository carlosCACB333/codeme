import { DirectoryTree } from "@/data/directory-tree";
import { createStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface DirectoryProps {
  directories: DirectoryTree[];
  activeDirectory: DirectoryTree | null;
  activeFiles: DirectoryTree[];
  acitiveFile: DirectoryTree | null;
}

export interface DirectoryState extends DirectoryProps {
  deleteDirectory: (id: string) => void;
  addDirectory: (parentId: string, directory: DirectoryTree) => void;
  updateDirectory: (directory: DirectoryTree) => void;
  setActiveDirectory: (directory: DirectoryTree) => void;
  addActiveFile: (file: DirectoryTree) => void;
  removeActiveFile: (id: string) => void;
  setActiveFile: (file: DirectoryTree) => void;
}

export type DirectoryStore = ReturnType<typeof createDirectoryStore>;

const deleteDirectoryRecursively = (
  directories: DirectoryTree[],
  id: string
): DirectoryTree[] => {
  return directories.reduce((acc, directory) => {
    if (directory.id === id) {
      return acc;
    }
    if (directory.children) {
      return [
        ...acc,
        {
          ...directory,
          children: deleteDirectoryRecursively(directory.children, id),
        },
      ];
    }
    return [...acc, directory];
  }, [] as DirectoryTree[]);
};

const updateDirectoryRecursively = (
  directories: DirectoryTree[],
  directory: DirectoryTree
): DirectoryTree[] => {
  return directories.reduce((acc, dir) => {
    if (dir.id === directory.id) {
      return [...acc, directory];
    }
    if (dir.children) {
      return [
        ...acc,
        {
          ...dir,
          children: updateDirectoryRecursively(dir.children, directory),
        },
      ];
    }
    return [...acc, dir];
  }, [] as DirectoryTree[]);
};

const addDirectoryRecursively = (
  directories: DirectoryTree[],
  parentId: string,
  directory: DirectoryTree
): DirectoryTree[] => {
  return directories.reduce((acc, dir) => {
    if (dir.id === parentId) {
      return [
        ...acc,
        {
          ...dir,
          children: [...(dir.children || []), directory],
        },
      ];
    }
    if (dir.children) {
      return [
        ...acc,
        {
          ...dir,
          children: addDirectoryRecursively(dir.children, parentId, directory),
        },
      ];
    }
    return [...acc, dir];
  }, [] as DirectoryTree[]);
};

export const createDirectoryStore = (
  initialProps: Partial<DirectoryProps>,
  StorageKey: string
) => {
  const DEFAULT_PROPS: DirectoryProps = {
    acitiveFile: null,
    activeDirectory: null,
    activeFiles: [],
    directories: [],
  };

  return createStore<DirectoryState>()(
    devtools(
      persist(
        (set) => ({
          ...DEFAULT_PROPS,
          ...initialProps,
          deleteDirectory: (id) =>
            set((state) => ({
              directories: deleteDirectoryRecursively(state.directories, id),
            })),
          addDirectory: (parentId, directory) =>
            set((state) => ({
              directories: addDirectoryRecursively(
                state.directories,
                parentId,
                directory
              ),
            })),
          updateDirectory: (directory) =>
            set((state) => ({
              directories: updateDirectoryRecursively(
                state.directories,
                directory
              ),
            })),
          setActiveDirectory: (directory) =>
            set(() => ({ activeDirectory: directory })),
          addActiveFile: (file) =>
            set((state) => {
              if (state.activeFiles.find((f) => f.id === file.id)) {
                return state;
              }
              return {
                activeFiles: [...state.activeFiles, file],
              };
            }),
          removeActiveFile: (id) =>
            set((state) => ({
              activeFiles: state.activeFiles.filter((file) => file.id !== id),
            })),
          setActiveFile: (file) => set(() => ({ acitiveFile: file })),
        }),
        {
          name: StorageKey + "-store",
          // merge: (initial, persisted) => {
          //   console.log(initial);
          //   console.log(persisted);
          //   return persisted;
          // },
        }
      )
    )
  );
};
