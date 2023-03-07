import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SkeletonTypography from "./SkeletonTypography";
import { ISkeletonButtonGroup, SkeletonButtonGroup } from "./SkeletonButton";
import DialogActions from "@mui/material/DialogActions";

export interface ISkeletonDialog {
  buttonLabel?: string;
  dialogButtons?: ISkeletonButtonGroup;
  contentChildrens?: JSX.Element;
}

export default function SkeletonDialog({
  buttonLabel,
  dialogButtons,
  contentChildrens
}: ISkeletonDialog) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback((string: string) => {
    return () => {
      console.log(string);
      setOpen(true);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen("OpenDialog")}>
        {buttonLabel || "Open dialog"}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle style={{ paddingRight: "calc(100% - 290px)" }}>
          <SkeletonTypography loading variant="h3" />
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>{contentChildrens}</DialogContent>
        {dialogButtons?.buttons.length ? (
          <DialogActions>
            <SkeletonButtonGroup buttons={dialogButtons.buttons} />
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  );
}
