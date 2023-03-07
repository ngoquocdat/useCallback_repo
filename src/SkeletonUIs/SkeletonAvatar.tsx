import Skeleton from "@mui/material/Skeleton";
import { ISkeletonModel } from "./SkeletonModels";

export interface ISkeletonAvatar extends ISkeletonModel {
  avatarDemension: number;
  variant?: any;
}

export default function SkeletonAvatar({
  options,
  variant,
  avatarDemension
}: ISkeletonAvatar) {
  return (
    <Skeleton
      animation={options?.animation}
      variant={variant || "circular"}
      width={avatarDemension}
      height={avatarDemension}
    />
  );
}
