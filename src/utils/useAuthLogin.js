// AuthLogic.js
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../Context/FirebaseContext";
import { useToast } from "../Context/ToastContext";

const useAuthLogin = () => {
  const navigate = useNavigate();
  const { _handleLogin, _updateProfile } = useFirebase();
  const { handleShowToast,setLoader,loader } = useToast();
  const handleLogin = async (
    email,
    password,
    user,
    showNameInput,
    setShowNameInput
  ) => {
    try {
      setLoader(true)
      const res = await _handleLogin(email, password);
      console.log(res);
      // if (!res.user.displayName) {
      //   setShowNameInput(true);
      // }
      // if (showNameInput) {
      //   // Update the profile with the entered name
      //   await _updateProfile(res.user, { displayName: user.name });
      //   navigate("/")
      // }
      localStorage.setItem("accessToken", res.user.accessToken);
      localStorage.setItem("email-verify",res.user.emailVerified)
      localStorage.setItem("_id", res.user.uid);
      localStorage.setItem("userInfo", JSON.stringify(res.user.providerData));
      handleShowToast("Login successful", "success");
      navigate("/")
    } catch (error) {
      console.error("Login Error:", error);
      // handleShowToast(error?.message, "error");
      handleShowToast("Login Error : Please try again ", "error");
      setLoader(false)
    }
    finally {
      setLoader(false)
    }
  };

  return { handleLogin };
};

export default useAuthLogin;
