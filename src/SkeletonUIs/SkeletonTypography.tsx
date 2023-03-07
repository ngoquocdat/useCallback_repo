import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export default function SkeletonTypography(props: {
  variant: any;
  style?: any;
  loading?: boolean;
}) {
  const { loading = false, variant, style } = props;

  return (
    <Typography component="div" key={variant} variant={variant}>
      {loading ? <Skeleton sx={style} /> : variant}
    </Typography>
  );
}
