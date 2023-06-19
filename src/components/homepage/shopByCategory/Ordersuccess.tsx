"use-client";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import * as React from "react";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product Successfully Added to Cart!", { variant });
  };

  return (
    <React.Fragment>
      <IconButton aria-label="added" onClick={handleClickVariant("success")}>
        <AddCircleOutlineIcon color="success" />
      </IconButton>
    </React.Fragment>
  );
}

export default function OrderSuccess() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
