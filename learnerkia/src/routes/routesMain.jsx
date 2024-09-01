import Layout from "../components/layout/Layout";
import homeRoutes from "./homeRoutes";
import userRoutes from "./userRoutes";

const routesMain = [
  {
    path: "/",
    element: <Layout />,
    children: [...homeRoutes, ...userRoutes],
  },
];

export default routesMain;
