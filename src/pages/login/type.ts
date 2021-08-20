export interface DataType {
  data: Data;
  returnCode: string;
  success: boolean;
}

export interface Data {
  banner: Banner;
  dKeyword: DKeyword;
  keywords: Keywords;
  recommend: Recommend;
}

export interface Recommend {
  context: Context;
  isEnd: boolean;
  list: List_3[];
  nextPage: number;
}

export interface List_3 {
  acm: string;
  image: string;
  link: string;
  sort: number;
  title: string;
}

export interface Context {
  currentTime: number;
}

export interface Keywords {
  context: Context;
  isEnd: boolean;
  list: List_2[];
  nextPage: number;
}

export interface List_2 {
  acm: string;
  is_red: string;
  words: string;
}

export interface DKeyword {
  context: Context;
  isEnd: boolean;
  list: List_1[];
  nextPage: number;
}

export interface List_1 {
  acm: string;
  defaultKeyWord: string;
}

export interface Banner {
  context: Context;
  isEnd: boolean;
  list: List[];
  nextPage: number;
}

export interface List {
  acm: string;
  height: number;
  height923: number;
  image: string;
  image923: string;
  link: string;
  title: string;
  width: number;
  width923: number;
}
