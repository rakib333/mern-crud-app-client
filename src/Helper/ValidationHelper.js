// import cogoToast from "cogo-toast";
import { toast } from "react-toastify";
class ValidationHelper {
  isEmpty(value) {
    if (value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  successToast(msg) {
    toast.success(msg, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

//   errorToast(msg) {
//     cogoToast.error(msg);
//     }
    
    errorToast(msg) {
        toast.error(msg, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }

  
}

export const { isEmpty, successToast, errorToast } =new ValidationHelper();
