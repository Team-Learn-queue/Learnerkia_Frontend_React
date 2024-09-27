import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesMain from "./routes/routesMain";

const router = createBrowserRouter(routesMain);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
