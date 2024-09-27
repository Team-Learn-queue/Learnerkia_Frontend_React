import Layout from "../components/layout/main/Layout";
import Onboarding from "../components/pages/onboarding/Onboarding";
import authRoutes from "./authRoutes";

import userRoutes from "./userRoutes";

const routesMain = [
  {
    path: "/",
    element: <Layout />,
    children: [...userRoutes],
  },
  {
    path: "onboarding",
    element: <Onboarding />,
    children: [...authRoutes],
  },
];

export default routesMain;
