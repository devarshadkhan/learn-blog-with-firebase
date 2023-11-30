
import { useContext, createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext(null);

export const useToast = () => useContext(ToastContext);

export const Toast_Provider = ({ children }) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [toastSeverity, setToastSeverity] = useState("success");

  //maine sari functinaliity isi me rakhi toastopen ki message ki all sab
  const handleShowToast = (message, type = toastSeverity) => {
    setToastSeverity(type);
    setToastMessage(message);
    setToastOpen(true);
    // Using the toast function from react-toastify
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: type, // Dynamically set the type
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContext.Provider
        value={{ toastOpen, setToastOpen, toastMessage, setToastMessage, loader, setLoader, toastSeverity, setToastSeverity, handleShowToast }}
      >
        {children}
        {/* <button onClick={() => showToast('🦄 Wow so easy!', 'success')}>Success Toast</button>
        <button onClick={() => showToast('Error occurred!', 'error')}>Reject Toast</button> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ToastContext.Provider>
    </>
  );
};
