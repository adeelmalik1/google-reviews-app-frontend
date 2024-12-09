import { toast } from "react-toastify";

const success = (message) => {
  if (message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

const error = (message) => {
  if (message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
// eslint-disable-next-line
export default { success, error };
