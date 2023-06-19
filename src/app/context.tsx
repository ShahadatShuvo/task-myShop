// React useContext decleared here

import { createContext } from "react";

interface AllProductsInterface {
  id: number | string;
  title: string;
  description: string;
  price: number;
  stock: number;
  qty: number;
  image_url: string;
}

interface allContextValue {
  isLightTheme: boolean;
  toggleTheme: () => void;
  allProducts: AllProductsInterface[];
  //   increaseContextValue: (newValue: ProductCardProps) => void;
  //   decreaseContextValue: (newValue: ProductCardProps) => void;
  //   deleteContextValue: (newValue: ProductCardProps) => void;
}

export const AllContext = createContext<allContextValue>({
  isLightTheme: true,
  toggleTheme: () => {},
  //   toggleTheme: () => boolean,
  allProducts: [],
  //   increaseContextValue: () => {},
  //   decreaseContextValue: () => {},
  //   deleteContextValue: () => {},
});
