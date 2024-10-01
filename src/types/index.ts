import { DialogProps } from "@mui/material";

export interface KPopupProps extends Omit<DialogProps, "title" | "content" | "open"> {
    id?: string;
    touchOutsideToDismiss?: boolean;
    title: string;
    titleProps?: {
      id?: string;
      color?: string;
      alignment?: "center" | "left";
    };
    content: (dismiss: () => void) => any;
  }