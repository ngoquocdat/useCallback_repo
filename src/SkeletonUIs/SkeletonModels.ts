export interface ISkeletonModel {
  options?: {
    animation?: "pulse" | "wave";
    children?: React.ReactNode;
    style?: any;
  };
}

export interface IButtonSkeletonModel {
  size: "large" | "medium" | "small";
}
