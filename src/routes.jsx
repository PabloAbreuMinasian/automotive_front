import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/views/MainLayout";
import NotFound from "./components/views/NotFound";
import Home from "./components/views/Home";
import SellCar from "./components/views/SellCar";
import ShopCars from "./components/views/ShopCars";
import Contact from "./components/views/Contact";
import AboutUs from "./components/views/AboutUs";

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
        path: "vender",
        element: <SellCar />,
      },
      {
        path: "comprar",
        element: <ShopCars />,
      },
      {
        path: "nosotros",
        element: <AboutUs />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
