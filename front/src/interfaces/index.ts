export type Locale = "en" | "es";

interface Params {
  locale: Locale;
  [key: string]: string | string[];
}

export interface LayoutProps {
  children: React.ReactNode;
  params: Params;
}

export interface PageProps {
  params: Params;
}

export interface SearchItem {
  content: string;
  objectID: string;
  url: string;
  type: "lvl1" | "lvl2" | "lvl3";
  hierarchy: {
    lvl1: string | null;
    lvl2?: string | null;
    lvl3?: string | null;
  };
}

export interface Response<T> {
  data?: T;
  status: number;
  message: string;
  [key: string]: any;
}
