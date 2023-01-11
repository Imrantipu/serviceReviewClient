import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Service from "../pages/Home/Service";
import Services from "../pages/Home/Services";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import NewService from "../pages/NewService/NewService";
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
          fetch("https://y-two-red.vercel.app/home"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://y-two-red.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <Service></Service>,
        loader: ({ params }) =>
          fetch(
            `https://y-two-red.vercel.app/service/${params.id}`
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
            `https://y-two-red.vercel.app/addservice/${params.id}`
          ),
      },

      {
        path: "/review",
        element: (
          <PrivateRoute>
           <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
          <NewService></NewService>
          </PrivateRoute>
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
