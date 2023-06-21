"use client";

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AllContext } from "../../../app/context";
import AllProductsDisplay from "./AllProductsDisplay";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IconButton, Pagination } from "@mui/material";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const scrollDuration = 500; // Animation duration in milliseconds

function ShopByCategory() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);
  const [data, setData] = useState<any>(null);
  const [allCategories, setAllCategories] = useState<any>(null);
  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [displaySearch, setDisplaySearch] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // get all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (searchValue) {
          response = await fetch(`${apiUrl}/products/search?q=${searchValue}`);
        } else if (category) {
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
  }, [page, category, searchValue]);

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

  useEffect(() => {
    scroll.scrollToTop({ duration: scrollDuration }); // Scroll to the top on page load
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCategory("");
  };
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    setSearchValue("");
  };
  const onhandleSearchClose = () => {
    setDisplaySearch(false);
    setSearchValue("");
  };
  return (
    <div className="md:mt-64 mx-5 md:mx-24">
      <Element name="search" className="section">
        {/* Content of Section 1 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-[60%]">
            <h1 className="capitalize text-xl md:text-4xl font-bold md:font-semibold">
              Shop by category
            </h1>
            <p className="mt-3 md:mt-5">
              Life is hard enough already. Let us make it a little easier.
            </p>
          </div>

          <div className="w-full flex justify-center">
            {displaySearch && (
              <div className="mt-5 md:mt-0 w-full md:w-[70%] relative flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Type your keywords here"
                  autoFocus
                  onChange={handleSearchChange}
                  value={searchValue}
                  className={
                    isLightTheme
                      ? "bg-blue-50 h-7 md:h-10 shadow-sm  block w-full sm:text-sm rounded-full px-8 md:px-12 focus:outline-none text-sm md:text-md"
                      : "text-black bg-blue-50 h-7 md:h-10 shadow-sm  block w-full sm:text-sm rounded-full px-8 md:px-12 focus:outline-none text-sm md:text-md"
                  }
                />
                <div className="absolute left-1 md:left-3">
                  <SearchOutlinedIcon className="text-black" />
                </div>
                <div className="absolute right-0 md:right-2">
                  <IconButton aria-label="delete" onClick={onhandleSearchClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center mt-5 md:mt-0">
            {!displaySearch && (
              <div
                className={
                  isLightTheme
                    ? "flex items-center pl-2 rounded-lg mr-1 hover:bg-blue-200"
                    : "flex items-center pl-2 rounded-lg mr-1 hover:bg-white hover:text-black"
                }
                onClick={() => setDisplaySearch(true)}
              >
                <p>search</p>
                <IconButton
                  sx={{ color: isLightTheme ? "black" : "white" }}
                  className="text-blue-400"
                  onClick={() => setDisplaySearch(true)}
                >
                  <SearchOutlinedIcon />
                </IconButton>
              </div>
            )}
            <FormControl sx={{ minWidth: 188 }} size="small">
              <InputLabel
                id="demo-select-small-label"
                sx={{ color: isLightTheme ? "black" : "white" }}
              >
                Select a Category
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                label="Select a Category"
                onChange={handleCategoryChange}
                sx={{
                  color: isLightTheme ? "black" : "white",
                  borderColor: isLightTheme ? "black" : "white",
                }}
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
      </Element>
    </div>
  );
}

export default ShopByCategory;
