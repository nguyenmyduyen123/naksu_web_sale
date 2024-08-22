import useCombineRefs from "@/hooks/useCombineRefs";
import { ForwardedRef, useMemo, useRef } from "react";

const useInputOptions = (props: any, ref: ForwardedRef<HTMLInputElement>) => {
  const { rest } = props

  const innerRef = useRef<HTMLInputElement>();
  const combinedRef = useCombineRefs<HTMLInputElement>(ref, innerRef)

  return { combinedRef };
};

export { useInputOptions };
