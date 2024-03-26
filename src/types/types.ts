import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CardProp {
  alpha3Code: string;
  capital: string;
  currencies: CurrencyProp[];
  flag: string;
  languages: Language[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  borders: string[];
  topLevelDomain: string;
}

export interface CountryProp {
  data: CardProp[];
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface CurrencyProp {
  code: string;
  name: string;
  symbol: string;
}
export interface ChildrenProp {
  children: ReactNode;
}

export interface CountryContextType {
  data: { key: string; value: string }[];
  setData: Dispatch<SetStateAction<any[]>>;
}

export interface FilteredDataArray {
  0: {
    languages: string[];
    borders: string[];
  };
  length: 1;
}
