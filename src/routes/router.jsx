import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authentication from "../Layouts/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/Category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication></Authentication>,
      children: [
          {
              path: '/auth/login',
              element:<Login></Login>
          },
          {
              path: '/auth/register',
              element:<Register></Register>
          }
      ],
  },
  {
    path: "/news",
    element: <p>news </p>,
  },
  {
    path: "/*",
    element: <p>error</p>,
  },
]);
export default router;
