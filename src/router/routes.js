import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Service from "../pages/Home/Service";
import Services from "../pages/Home/Services";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("http://localhost:5000/home"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("http://localhost:5000/services"),
      },
      {
        path: "/service/:id",
        element: <Service></Service>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/service/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/addservice/${params.id}`
          ),
      },
      
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      
    ],
  },
]);
