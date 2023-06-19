"use client";

import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="text-white body-font mt-48 bg-[#023F75]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font   tracking-widest text-xl font-semibold mb-3">
              Shop
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-red-500">First Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Second Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Third Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  tracking-widest text-xl font-semibold mb-3">
              Sell
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-gray-100">First Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Second Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Third Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font   tracking-widest text-xl font-semibold mb-3">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-red-500">First Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Second Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Third Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-xl font-semibold title-font   tracking-widest mb-3">
              Help
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-red-500">First Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Second Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Third Link</a>
              </li>
              <li>
                <a className=" hover:text-red-500">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 All rights reserve —
            <a
              href="https://www.facebook.com/hossain.shuvo.7860"
              rel="noopener noreferrer"
              className="text-red-500 font-semibold ml-1"
              target="_blank"
            >
              Shahadat Hossain
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-gray-500">
            <a href="https://www.facebook.com/hossain.shuvo.7860">
              <FacebookOutlinedIcon />
            </a>
            <a href="https://github.com/ShahadatShuvo" className="ml-2">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shahadat-hossain7860/"
              className="ml-2"
            >
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
