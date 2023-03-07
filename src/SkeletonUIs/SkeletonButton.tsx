import { Skeleton } from "@mui/material";
import { IButtonSkeletonModel } from "./SkeletonModels";

export interface ISkeletonButtonGroup {
  buttons: IButtonSkeletonModel[];
  wrapperWidth?: number;
}

export function SkeletonButton({ size }: IButtonSkeletonModel) {
  const getDrink = (size: string) => {
    return {
      small: { width: "60px", height: "30px" },
      medium: { width: "70px", height: "45px" },
      large: { width: "100px", height: "56px" }
    }[size];
  };
  return <Skeleton variant="rounded" {...getDrink(size)}></Skeleton>;
}

export function SkeletonButtonGroup({
  buttons,
  wrapperWidth
}: ISkeletonButtonGroup) {
  const renderSkeletonButtons = () => {
    if (buttons?.length) {
      return buttons.map((btn: IButtonSkeletonModel) => {
        return <SkeletonButton {...btn} />;
      });
    }
    return null;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "10px",
        width: `${wrapperWidth}px`
      }}
    >
      {renderSkeletonButtons()}
    </div>
  );
}
