import { ForwardedRef, useRef } from "react";

const useInputOptions = (props: any, ref: ForwardedRef<HTMLInputElement>) => {
  const innerRef = useRef<HTMLInputElement>();
  //   const combinedRef = useCombineRe

  return { ...props };
};

export { useInputOptions };
