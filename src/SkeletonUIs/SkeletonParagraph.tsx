import React from "react";
import { ISkeletonModel } from "./SkeletonModels";
import SkeletonTypography from "./SkeletonTypography";

export interface ISkeletonParagraph extends ISkeletonModel {
  lines: number;
  variant?: any;
}

export default function SkeletonParagraph({
  lines,
  variant,
  options
}: ISkeletonParagraph) {
  console.log("SkeletonParagraph: ", lines, variant);
  const renderSkeletonParagraph = () => {
    let skeletons: JSX.Element[] = [];
    for (let i = 0; i < lines; i++) {
      skeletons.push(
        <SkeletonTypography
          loading
          variant={variant ? variant : "body1"}
          style={{ ...options?.style }}
        />
      );
    }
    return skeletons;
  };

  return <>{renderSkeletonParagraph()}</>;
}
