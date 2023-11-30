import "./App.css";
import {
  Routes,
  Route,
  useParams,
  useSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ProtectedRoutes from "./Protect/ProtectedRoutes";
import MyNavbar from "./Components/Navbar";
import AuthLayout from "./Layout/AuthLayout";
import CustomLayout from "./Layout/CustomLayout";
function App({children}) {
  const params = useLocation();
  // const query = new URLSearchParams();

  // console.log(params.search);

  const hashPath = ["/login", "/register","*"];

  const getLayout = (route) => {
    if (hashPath.includes(route)) {
      return AuthLayout;
    } else {
      return CustomLayout;
    }
  };

  const CustomLayoutFill = getLayout(params.pathname);
  return (
    <>
    <CustomLayoutFill>{children}</CustomLayoutFill>
   
      {/* <CustomLayoutFill> */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      {/* </CustomLayoutFill> */}
    </>
  );
}

export default App;
