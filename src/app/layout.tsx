"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { AllContext } from "./context";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allProducts, setAllProducts] = useState<any>([]);
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme: boolean) => !prevTheme);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AllContext.Provider value={{ isLightTheme, toggleTheme, allProducts }}>
          {children}
        </AllContext.Provider>
      </body>
    </html>
  );
}
