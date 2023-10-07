import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/MainLayout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../components/Details";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/event/:id',
          element: <PrivetRoutes><Details></Details></PrivetRoutes>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/services',
          element: <Services></Services>
        }
       
      ]
    },
  ]);

export default router;

