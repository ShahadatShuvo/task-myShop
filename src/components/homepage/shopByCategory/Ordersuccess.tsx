"use-client";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import * as React from "react";

interface ProductCardProps {
  id: number | string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

function MyApp({
  onHandleClick,
  product,
  type,
}: {
  onHandleClick: any;
  product: ProductCardProps;
  type: string;
}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product Successfully Added to Cart!", {
      variant,
      autoHideDuration: 3000,
    });
    onHandleClick(product);
  };

  return (
    <React.Fragment>
      {type === "btn" ? (
        <Button
          variant="contained"
          size="small"
          className="rounded-full bg-black mt-3"
          onClick={handleClickVariant("success")}
        >
          Order Now
        </Button>
      ) : (
        <IconButton aria-label="added" onClick={handleClickVariant("success")}>
          <AddCircleOutlineIcon color="success" />
        </IconButton>
      )}
    </React.Fragment>
  );
}

export default function OrderSuccess({
  onHandleClick,
  product,
  type,
}: {
  onHandleClick: any;
  product: ProductCardProps;
  type: string;
}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp type={type} onHandleClick={onHandleClick} product={product} />
    </SnackbarProvider>
  );
}
