import { TextField } from "@mui/material";
import { forwardRef, memo } from "react";
import { useInputOptions } from "./helpers";

const KTextField = forwardRef<HTMLInputElement, any>((props, ref) => {
  const { combinedRef } = useInputOptions(props, ref);
  return <TextField size="small" inputRef={combinedRef} variant="outlined" autoComplete="off" />;
});

export default memo(KTextField);
