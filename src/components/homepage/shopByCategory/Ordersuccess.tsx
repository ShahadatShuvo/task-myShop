"use-client";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
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
}: {
  onHandleClick: any;
  product: ProductCardProps;
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
      <IconButton aria-label="added" onClick={handleClickVariant("success")}>
        <AddCircleOutlineIcon color="success" />
      </IconButton>
    </React.Fragment>
  );
}

export default function OrderSuccess({
  onHandleClick,
  product,
}: {
  onHandleClick: any;
  product: ProductCardProps;
}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp onHandleClick={onHandleClick} product={product} />
    </SnackbarProvider>
  );
}
