import { TextField } from "@mui/material";
import { forwardRef, memo } from "react";
import { useInputOptions } from "./helpers";

const KTextField = forwardRef<HTMLInputElement, any>((props, ref) => {
  useInputOptions(props, ref);
  return <TextField />;
});

export default memo(KTextField);
