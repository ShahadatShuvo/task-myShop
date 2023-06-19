"use client";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { AllContext } from "../../../app/context";
// import { CartItemContext } from "@/app/_page";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

export default function CartMenu() {
  const { allProducts, increaseCartValue, deleteCartValue } =
    useContext(AllContext);

  console.log("allProducts", allProducts);

  const { isLightTheme, toggleTheme } = useContext(AllContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const subTotal = allProducts.reduce(
    (acc: number, item: any) => acc + item.price * item.qty,
    0
  );
  const handleRemove = (product: any) => {
    deleteCartValue(product);
  };

  const allCartItems = allProducts.map((product: any) => {
    return (
      <div key={product.id}>
        <div id="single-product" className="my-5 flex justify-between">
          <div className="min-w-[80%] flex">
            <Image
              // src="/img/cart/shoe.jpg"
              src={product.images[0]}
              alt="shopbag"
              width={90}
              height={50}
              className="rounded-md h-[88px] object-cover my-auto mr-3"
            />
            <div>
              <h3
                className={
                  isLightTheme
                    ? "font-semibold text-gray-700 text-md"
                    : "font-semibold text-white text-md"
                }
              >
                {product.title}
              </h3>
              <p className="text-gray-400 mb-5">{product.brand}</p>
              <p className="text-gray-400 ">Price: {product.price}</p>
              <p className="text-gray-400">Qty: {product.qty}</p>
            </div>
          </div>
          <div>
            <p className="mb-8 text-center py-1 border-2 border-green-600 rounded-lg">
              {product.price * product.qty} TK
            </p>

            <Button
              size="medium"
              color="error"
              className="bg-red-50"
              onClick={() => handleRemove(product)}
            >
              Remove
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    );
  });
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, mt: "4px", p: "4px" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="text-white"
          >
            <AddShoppingCartIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ".css-6hp17o-MuiList-root-MuiMenu-list": {
              p: 0,
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div
          className={
            isLightTheme ? "w-[30vw]" : "w-[30vw] bg-[#1F2937] text-white"
          }
        >
          <div className="px-5 pt-5 max-h-[65vh] overflow-y-scroll hide-scrollbar">
            <h1
              className={
                isLightTheme
                  ? "text-xl font-bold text-gray-500"
                  : "text-xl font-bold text-white"
              }
            >
              Shopping Cart
            </h1>
            {allCartItems}
          </div>

          <div
            className={
              isLightTheme ? "mt-3 pb-3 bg-blue-50" : "mt-3 pb-3 bg-[#1F2937]"
            }
          >
            <div className="pt-3 px-5 font-bold flex justify-between">
              <p>Subtotal</p>
              <p>{subTotal} TK</p>
            </div>
            <Link href="/checkout">
              <div className="px-5 py-3 pt-5  flex justify-between gap-2">
                <p
                  className={
                    isLightTheme
                      ? "w-full px-6 py-2 rounded-full text-center drop-shadow-md hover:drop-shadow-xl bg-gray-800 hover:bg-gray-950 text-white font-semibold"
                      : "w-full px-6 py-2 rounded-full text-center drop-shadow-md hover:drop-shadow-xl bg-white hover:bg-blue-100 text-black font-semibold"
                  }
                >
                  Check out
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}
