import { createContext } from "react";

interface CatsContextModel {
  catApi: any;
  setCatApi: (catApi: any) => void;
}

export const CatsContext = createContext<CatsContextModel>(
  {} as CatsContextModel
);
