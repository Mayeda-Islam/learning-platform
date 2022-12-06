import { async } from "@firebase/util";
import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Profile from "../Others/Profile";
import Blogs from "../Pages/Blogs";
import CheckOut from "../Pages/CheckOut";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader:async()=>{
          return fetch (`http://localhost:5000/courses/`)
        }
      },
      {
        path: "/category/:id",
        element: <Courses></Courses>,
        loader: async ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:5000/course-category/${params.id}`);
        },
      },
      { path: "/FAQ", element: <FAQ></FAQ> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: async ({ params }) => {
          console.log(params.id);
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
      },
      {path:'/profile',element:<PrivateRoute><Profile></Profile></PrivateRoute>},
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
