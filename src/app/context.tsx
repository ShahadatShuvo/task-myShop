// React useContext decleared here

import { createContext } from "react";

interface AllProductsInterface {
  id: number | string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  qty: number;
  thumbnail: string;
  title: string;
}

interface allContextValue {
  isLightTheme: boolean;
  toggleTheme: () => void;
  allProducts: AllProductsInterface[];
  increaseCartValue: (newValue: AllProductsInterface) => void;
  decreaseCartValue: (newValue: AllProductsInterface) => void;
  deleteCartValue: (newValue: AllProductsInterface) => void;
}

export const AllContext = createContext<allContextValue>({
  isLightTheme: true,
  toggleTheme: () => {},
  allProducts: [],
  increaseCartValue: () => {},
  decreaseCartValue: () => {},
  deleteCartValue: () => {},
});
