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

export type TeamnoteLanguage = "cpp" | "c" | "python" | "java" | "kotlin";

export interface TeamnoteAlgorithm {
  author: string;
  title: string;
  explanation?: string;
  timeComplexity?: string;
  code: string;
  language: TeamnoteLanguage;
  type: "algorithm";
}

export interface TeamnoteText {
  author: string;
  title: string;
  text: string;
  type: "text";
}

export type TeamnoteLayout =
  | "horizontal-1"
  | "horizontal-2"
  | "horizontal-3"
  | "vertical-1"
  | "vertical-2";

export interface Teamnote {
  author: string;
  title: string;
  subtitle?: string;
  layout: TeamnoteLayout;
  header: TeamnoteHeader;
  categories: TeamnoteCategory[];
}
