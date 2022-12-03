import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

export const routes = createBrowserRouter([
  { path: "/", element: <Main></Main> ,children:[
    {path:"/",element:<Home></Home>}
  ]},
]);
