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
    name: "app",
    type: "directory",
    children: [
      {
        id: "1.1",
        name: "models",
        type: "directory",
        children: [],
      },
      {
        id: "1.2",
        name: "routes",
        type: "directory",
        children: [],
      },
      {
        id: "1.3",
        name: "__init__.py",
        type: "file",
      },
    ],
  },

  {
    id: "2",
    name: "main.py",
    type: "file",
  },
];
