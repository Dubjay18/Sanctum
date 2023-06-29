import { toast } from "react-toastify";

export const notify = (
  text: string,
  type: string
): void => {
  if (type === "error") {
    toast.error(text);
  } else {
    toast.success(text);
  }
};
