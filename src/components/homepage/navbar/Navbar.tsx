"use client";

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge, IconButton } from "@mui/material";
import Image from "next/image";
import MenuBarIcon from "./ProfileMenu";
import CartMenu from "./CartMenu";

function Navbar() {
  const [displaySearch, setDisplaySearch] = React.useState(false);
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#1D65FF]">
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
            <MenuBarIcon />
            <Badge
              badgeContent={3}
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
