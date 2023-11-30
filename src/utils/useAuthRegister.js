// Register Logic

import React from 'react'
import { useFirebase } from '../Context/FirebaseContext';
import { sendEmailVerification } from 'firebase/auth';
import { useToast } from '../Context/ToastContext';

const useAuthRegister = () => {
    const {_handleRegister}  = useFirebase()
    const { handleShowToast,setLoader,loader } = useToast();
    const handleRegister = async (email,password)=>{
     
        try {
            setLoader(true)
            const res = await _handleRegister(email, password);
            console.log("Registration result:", res);
            handleShowToast("Register successful", "success");
            if(res.user){
            await sendEmailVerification(res.user);
            handleShowToast("Email verification sent successfully", "success");
           }
        //    handleShowToast("You are registerd keep please login now", "success");
                  console.log("Email verification sent successfully.");
      
          } catch (error) {
            setLoader(false)
            handleShowToast("Register Error : Please try again ", "error");
            console.error("Registration or email verification error:", error.message);
          }
          finally{
            setLoader(false)
          }
    }
  return {handleRegister}
}

export default useAuthRegister