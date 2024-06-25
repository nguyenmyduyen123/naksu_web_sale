import Grid, { GridProps } from "@mui/material/Grid";
import { memo } from "react";

const KGridContainer = (props: GridProps) => {
  const { style, ...otherProps } = props;
  return <Grid {...otherProps} style={style} />;
};

KGridContainer.defaultProps = {
    container: true,
    spacing: 3
}

KGridContainer.displayName = "KGrid.Container";

export default memo(KGridContainer);
