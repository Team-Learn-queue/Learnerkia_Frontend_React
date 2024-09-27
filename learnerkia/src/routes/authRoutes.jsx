import Login from "../components/pages/Auth/Login";
import SignUp from "../components/pages/Auth/SignUp";
import SignUpTypeSelection from "../components/pages/Auth/SignUpTypeSelection";
import Dashboard from "../components/pages/Dashboard";

const authRoutes = [
  { path: "", element: <SignUpTypeSelection /> },
  { path: "login", element: <Login /> },
  { path: "sign-up", element: <SignUp /> },
];

export default authRoutes;
