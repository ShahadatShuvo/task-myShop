"use client";

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AllContext } from "../../../app/context";
import AllProductsDisplay from "./AllProductsDisplay";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Pagination } from "@mui/material";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function ShopByCategory() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);
  const [data, setData] = useState<any>(null);
  const [allCategories, setAllCategories] = useState<any>(null);
  console.log("allCategories:", allCategories);
  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // get all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (category) {
          response = await fetch(`${apiUrl}/products/category/${category}`);
        } else {
          response = await fetch(
            `${apiUrl}/products?limit=12&skip=${12 * page}`
          );
        }
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [page, category]);

  // get category list
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/products/categories`);
        if (response.ok) {
          const result = await response.json();
          setAllCategories(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="md:mt-64 mx-5 md:mx-24">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div>
          <h1 className="capitalize text-xl md:text-4xl font-bold md:font-semibold">
            Shop by category
          </h1>
          <p className="mt-3 md:mt-5">
            Life is hard enough already. Let us make it a little easier.
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <FormControl sx={{ marginTop: 2, minWidth: 188 }} size="small">
            <InputLabel id="demo-select-small-label">
              Select a Category
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={category}
              label="Select a Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value="">
                <em>All products</em>
              </MenuItem>
              {allCategories?.map((category: any) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex justify-center">
        <AllProductsDisplay data={data?.products} />
      </div>
      <div className="my-10 flex justify-center">
        <Pagination
          count={data ? Math.ceil(data?.total / 12 - 1) : 5}
          color="primary"
          page={page}
          onChange={handleChange}
          className={
            isLightTheme ? "" : "bg-white py-2 md:px-4 rounded-xl mb-5"
          }
        />
      </div>
    </div>
  );
}

export default ShopByCategory;
