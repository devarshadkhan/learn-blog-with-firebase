import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../../Context/FirebaseContext";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { sendEmailVerification, updateProfile } from "firebase/auth";
import useAuthRegister from "../../utils/useAuthRegister";
import { useToast } from "../../Context/ToastContext";
import { Spinner } from "react-bootstrap";
const Register = () => {
  const {handleRegister} = useAuthRegister()
  const { loader } = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name:""
  });

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    handleRegister(user.email,user.password)
  };
  // const handleRegisterSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await firebase._handleRegister(user.email, user.password);
  //     console.log("Registration result:", res);
  //     await sendEmailVerification(res.user);
      
  //           console.log("Email verification sent successfully.");

  //   } catch (error) {
  //     console.error("Registration or email verification error:", error.message);
  //   }
  // };

  
  // const handleRegisterSubmit = async (e) => {
  //   e.preventDefault();
  //  const res=  await firebase._handleRegister(user.email, user.password);
  //  console.log(res);
  //  await sendEmailVerification(res.user)
  //  console.log("res",res);
  // };
//   useEffect(()=>{
//     if(firebase.isLoggedIn){
//         navigate("/")
//     }
//     else{
//         navigate("/login") 
//     }
// },[firebase,navigate])
  return (
    <>
      <div className="container">
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </Form.Group>
      
          <Button variant="primary" type="submit">
          {loader ? (
            <>
              <Spinner animation="border" size="sm" /> logging
            </>
          ) : (
            "Register"
          )}
        </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
