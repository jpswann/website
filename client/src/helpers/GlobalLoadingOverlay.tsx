// GlobalLoadingOverlay.tsx
import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLoading } from "./LoadingContext";
import { blue } from "@mui/material/colors";

const GlobalLoadingOverlay: React.FC = () => {
  const { isLoading } = useLoading();
  console.log("GlobalLoadingOverlay isLoading:", isLoading);

  return (
    <Backdrop
      sx={{
        color: "blue",
        zIndex: 9999,
      }}
      open={isLoading}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default GlobalLoadingOverlay;
