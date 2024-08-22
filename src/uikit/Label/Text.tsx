import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

interface TextProps extends Omit<TypographyProps, "children"> {
  children: any;
  onPress?: () => void;
}

const Text = ({ children, onPress, ...props }: TextProps) => {
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={onPress}
        {...props}
      >
        {children}
      </Typography>
    </>
  );
};

export default memo(Text);
