import { createRef, forwardRef, memo, useCallback, useId, useImperativeHandle, useMemo, useState } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { popupRef } from "@/constant";
import { KPopupProps } from "@/types";

interface WithPopupProps {
    open: (payload: KPopupProps) => void;
    dismiss: () => void;
    dismissAll: () => void;
  }


interface KPopupItemProps {
  item: KPopupProps;
  dismiss: () => void;
}

const KPopupItem = memo(({ item, dismiss }: KPopupItemProps) => {
  const {
    id: itemId,
    touchOutsideToDismiss,
    title,
    titleProps,
    content,
    ...rest
  } = item;
  const { color } = titleProps || {};

  const randomId = useId();

  const id = useMemo(
    () => (itemId || randomId).replace(/:/g, ""),
    [itemId, randomId]
  );

  return (
    <Dialog
      key={id}
      aria-labelledby={`title-${id}`}
      maxWidth="sm"
      fullWidth
      {...rest}
      open={true}
      // PaperComponent={PaperComponent}
      // onClose={touchOutsideToDismiss ? dismiss : undefined}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogContent dividers>{content(dismiss)}</DialogContent>
    </Dialog>
  );
});

const KPopup = forwardRef<WithPopupProps>((_, ref) => {
    const [data, setData] = useState<KPopupProps[]>([]);
  
    const dismiss = useCallback(() => {
      const newData = data.slice(0, -1);
      setData(newData);
      popupRef.current?.dismissAll();
    }, [data]);
  
    useImperativeHandle(
      ref,
      () => ({
        open: payload => {
          setData([...data, payload]);
          popupRef.current?.dismissAll();
        },
        dismiss,
        dismissAll: () => {
          setData([]);
          popupRef.current?.dismissAll();
        }
      }),
      [data, dismiss]
    );
  
    if (!data || data.length === 0) {
      return null;
    }
  
    return (
      <>
        {data.map(i => (
          <KPopupItem key={i.title} item={i} dismiss={dismiss} />
        ))}
      </>
    );
  });
  
export default memo(KPopup);
  
