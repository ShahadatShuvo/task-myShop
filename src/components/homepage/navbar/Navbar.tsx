"use client";

import { useContext } from "react";
import { AllContext } from "../../../app/context";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge, IconButton } from "@mui/material";
import Image from "next/image";
import MenuBarIcon from "./ProfileMenu";
import CartMenu from "./CartMenu";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

function Navbar() {
  const { isLightTheme, allProducts } = useContext(AllContext);

  const [openHeadline, setOpenHeadline] = useState(true);

  const [displaySearch, setDisplaySearch] = React.useState(false);
  return (
    <div>
      <div>
        <Collapse in={openHeadline}>
          <Alert
            icon={
              <FeedOutlinedIcon
                fontSize="inherit"
                className={isLightTheme ? "text-gray-500" : "text-cyan-400"}
              />
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenHeadline(false);
                }}
              >
                <CloseIcon
                  fontSize="inherit"
                  className={isLightTheme ? "text-gray-500" : "text-cyan-400"}
                />
              </IconButton>
            }
            className={isLightTheme ? "bg-white" : "bg-[#1F2937]"}
            sx={{
              padding: "0px 16px",
              // bgcolor: "white",
              marginTop: "5px",
              marginX: "5px",
              border: "1px solid black",
              ".css-1pxa9xg-MuiAlert-message": {
                padding: "3px 0px",
              },
            }}
          >
            <div className="relative">
              <p className="absolute hidden md:block top-1 font-semibold ">
                <span
                  className={isLightTheme ? "text-gray-500" : "text-cyan-400"}
                >
                  Headline
                </span>
              </p>
              <div className="w-full flex justify-center">
                <div className=" w-full md:w-[85%]">
                  <div className="relative flex overflow-x-hidden text-lg">
                    <div className="animate-marquee whitespace-nowrap">
                      <span className={isLightTheme ? "" : "text-cyan-400"}>
                        SnipShop. Here, You will quickly get all kinds of your
                        daily Shopping, with only 1 click from your{" "}
                        <span
                          className={
                            isLightTheme ? "text-blue-400" : "text-pink-400"
                          }
                        >
                          Home or Office
                        </span>
                        . স্নিপশপ এখানে, আপনি আপনার বাসা বা অফিস থেকে মাত্র 1
                        ক্লিকে আপনার দৈনন্দিন সব ধরনের কেনাকাটা পেয়ে যাবেন, খুব
                        সহজে।
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Alert>
        </Collapse>
      </div>
      <header
        className={
          isLightTheme
            ? "text-gray-600 body-font bg-[#1D65FF]"
            : "text-white body-font bg-[#1F2937]"
        }
      >
        <div className="py-3 container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <Image
              src="/img/Logo.svg"
              alt=""
              width={90}
              height={60}
              className="h-[40px] w-[140px] rounded-full object-cover"
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className="w-[40vw] md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {displaySearch && (
                <div className="w-full relative flex items-center">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Type your keywords here"
                    autoFocus
                    //   onChange={handleSearchChange}
                    //   value={searchValue}
                    className="bg-blue-50 h-10 shadow-sm  block w-full sm:text-sm rounded-full  px-12 focus:outline-none "
                  />
                  <div className="absolute left-3">
                    <SearchOutlinedIcon />
                  </div>
                  <div className="absolute right-2">
                    <IconButton
                      aria-label="delete"
                      onClick={() => setDisplaySearch(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
              )}
            </div>
          </nav>
          {/* new div  */}
          <div className="flex items-center">
            {!displaySearch && (
              <IconButton
                className="text-white"
                onClick={() => setDisplaySearch(true)}
              >
                <SearchOutlinedIcon />
              </IconButton>
            )}
            <MenuBarIcon
              openHeadline={openHeadline}
              setOpenHeadline={setOpenHeadline}
            />
            <Badge
              badgeContent={allProducts.length}
              color="error"
              sx={{
                mt: "2px",
                ".css-106c1u2-MuiBadge-badge": {
                  borderRadius: "5px",
                },
              }}
            >
              {/* <MailIcon color="action" /> */}
              <CartMenu />
            </Badge>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
