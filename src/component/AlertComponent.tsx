import { Alert, Snackbar } from "@mui/material";
import React, { SetStateAction } from "react";

type TAlertComponent = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};
export const AlertComponent: React.FC<TAlertComponent> = ({
  open,
  setOpen,
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        복사되었습니다.
      </Alert>
    </Snackbar>
  );
};
