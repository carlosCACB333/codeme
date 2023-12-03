export interface DirectoryTree {
  id: string;
  name: string;
  type: "file" | "directory";
  children?: DirectoryTree[];
  expanded?: boolean;
}

export const directories: DirectoryTree[] = [
  {
    id: "1",
    name: "src",
    type: "directory",
    children: [
      {
        id: "2",
        name: "components",
        type: "directory",
        children: [
          {
            id: "3",
            name: "common",
            type: "directory",
            children: [
              {
                id: "4",
                name: "Code.tsx",
                type: "file",
              },
              {
                id: "5",
                name: "CodeHeader.tsx",
                type: "file",
              },
              {
                id: "6",
                name: "CodeIcon.tsx",
                type: "file",
              },
            ],
          },
          {
            id: "7",
            name: "CodeWindow",
            type: "file",
          },
          {
            id: "8",
            name: "CodeWindowHeader",
            type: "file",
          },
          {
            id: "9",
            name: "CodeWindowIcon",
            type: "file",
          },
        ],
      },
      {
        name: "data",
        type: "directory",
        id: "10",
        children: [
          {
            id: "11",
            name: "code.ts",
            type: "file",
          },
          {
            id: "12",
            name: "directory-tree.ts",
            type: "file",
          },
        ],
      },
      {
        id: "13",
        name: "pages",
        type: "directory",
        children: [
          {
            id: "14",
            name: "index.tsx",
            type: "file",
          },
        ],
      },
      {
        name: "styles",
        type: "directory",
        id: "15",
        children: [
          {
            id: "16",
            name: "globals.scss",
            type: "file",
          },
          {
            id: "17",
            name: "theme.scss",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "directory",
    id: "18",
    children: [
      {
        id: "19",
        name: "favicon.ico",
        type: "file",
      },
      {
        id: "20",
        name: "nextui-logo.svg",
        type: "file",
      },
    ],
  },
  {
    id: "21",
    name: "README.md",
    type: "file",
  },
  {
    id: "22",
    name: "tsconfig.json",
    type: "file",
  },
  {
    id: "23",
    name: "yarn.lock",
    type: "file",
  },
];
