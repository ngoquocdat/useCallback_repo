import Skeleton from "@mui/material/Skeleton";
import SkeletonTypography from "./SkeletonTypography";
import React from "react";
import { ISkeletonModel } from "./SkeletonModels";

export interface ISkeletonTextField extends ISkeletonModel {
  titleVariant?: any;
}

export default function SkeletonTextField({
  options,
  titleVariant
}: ISkeletonTextField) {
  return (
    <>
      {titleVariant ? (
        <SkeletonTypography
          loading
          variant={titleVariant}
          style={options?.style?.title}
        />
      ) : null}
      <Skeleton
        variant="rectangular"
        sx={{ ...options?.style?.textArea, marginTop: "0px !important" }}
        animation={options?.animation || false}
      />
    </>
  );
}
