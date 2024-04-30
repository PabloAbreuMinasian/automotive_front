import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/views/MainLayout";
import NotFound from "./components/views/NotFound";
import Home from "./components/views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
