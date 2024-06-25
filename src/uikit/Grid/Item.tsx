import Grid, { GridProps } from "@mui/material/Grid";
import React, { memo } from "react";

interface Props extends GridProps {}

const KGridItem = (props: Props) => {
  return <Grid {...props} />;
};

KGridItem.displayName = "KGrid.Item";

export default memo(KGridItem);
