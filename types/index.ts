export interface TeamnoteHeader {
  topLeft?: string;
  topRight?: string;
  topCenter?: string;
  bottomLeft?: string;
  bottomRight?: string;
  bottomCenter?: string;
}

export interface TeamnoteCategory {
  title: string;
  contents: TeamnoteContent[];
}

export type TeamnoteContent = TeamnoteAlgorithm | TeamnoteText;

export interface TeamnoteAlgorithm {
  author: string;
  title: string;
  explanation?: string;
  code: string;
  language: "cpp" | "c" | "python" | "java" | "kotlin";
}

export interface TeamnoteText {
  author: string;
  title: string;
  text: string;
}

export interface Teamnote {
  author: string;
  title: string;
  subtitle?: string;
  layout:
    | "horizontal-1"
    | "horizontal-2"
    | "horizontal-3"
    | "vertical-1"
    | "vertical-2";
  header: TeamnoteHeader;
  categories: TeamnoteCategory[];
}
