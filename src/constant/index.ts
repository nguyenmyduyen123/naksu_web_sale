import { KPopupProps } from "@/types";
import { createRef } from "react";

export interface WithPopupProps {
    open: (payload: KPopupProps) => void;
    dismiss: () => void;
    dismissAll: () => void;
  }
export const popupRef = createRef<WithPopupProps>();