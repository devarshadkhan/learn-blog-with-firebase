import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFirebase } from "../../Context/FirebaseContext";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import useAuthLogin from "../../utils/useAuthLogin";
import { useToast } from "../../Context/ToastContext";

const Login = () => {
  const { handleLogin } = useAuthLogin();
  const params = useLocation();
  // const query = useSearchParams ();
  // data kaise nikalte hai or kaise set karta hai
  // const [searchParams, setSearchParams] = useSearchParams();

  // const onChange = (event) => {
  //   const { name, value } = event?.target;
  //   setSearchParams({ [name]: value });
  // };
  // const queryParams = new URLSearchParams(window.location.search);
  // const searchBy = queryParams.get("search");
  // console.log(searchBy);
  // console.log({[name]: query});
  // const [data, setData] = useState(params.search);
  // console.log(data);
  const { loader } = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showNameInput, setShowNameInput] = useState(false);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin(
      user.email,
      user.password,
      user,
      showNameInput,
      setShowNameInput
    );
  };
  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await _handleLogin(user.email, user.password);
  //     console.log(res);
  //     if (!res.user.displayName) {
  //       setShowNameInput(true);
  //     }
  //     console.log("User Profile Data:");
  //     if (showNameInput) {
  //       // Update the profile with the entered name
  //       await _updateProfile(res.user, {
  //         displayName: user.name,
  //       });

  //     }
  //     localStorage.setItem("accessToken", res.user.accessToken);
  //     localStorage.setItem("_id", res.user.uid);
  //     localStorage.setItem("userInfo",JSON.stringify(res.user.providerData))
  //     console.log("Name added successfully.");
  //     res.user.providerData.forEach((profile) => {
  //       console.log("Sign-in provider: " + profile.providerId);
  //       console.log("  Provider-specific UID: " + profile.uid);
  //       console.log("  Name: " + profile.displayName);
  //       console.log("  Email: " + profile.email);
  //       console.log("  Photo URL: " + profile.photoURL);
  //       console.log("  Phone No.: " + profile.phoneNumber);
  //     });
  //     // Uncomment the following line if you want to navigate after successful login
  //     // navigate("/");
  //   } catch (error) {
  //     console.error("Login Error:", error);
  //   }
  // };

  return (
    <div className="container">
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        {showNameInput && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          {loader ? (
            <>
              <Spinner animation="border" size="sm" /> logging
            </>
          ) : (
            <>{!showNameInput ? "Login" : "Update Profile"}</>
          )}
        </Button>
      </Form>
      {/* <h1>{searchParams}</h1>
      <h1>{searchBy}</h1>
      <input name="search" onChange={onChange} /> */}
    </div>
  );
};

export default Login;
