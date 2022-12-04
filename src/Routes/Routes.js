import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";

export const routes = createBrowserRouter([
  { path: "/", element: <Main></Main> ,children:[
    {path:"/",element:<Home></Home>},
    {path:"/home",element:<Home></Home>},
    {path:'/courses',element:<Courses></Courses>},
    {path:"/FAQ",element:<FAQ></FAQ>},
    {path:'/blogs',element:<Blogs></Blogs>},
    {path:'/register',element:<Register></Register>},
    {path:'/login',element:<Login></Login>},
    {path:'*',element:<NotFound></NotFound>}
  ]},
]);
