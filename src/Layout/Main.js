import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";

const Main = () => {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
    </>
  );
};

export default Main;

{
  /* <div class="grid grid-cols-4 gap-4">
        <div >05</div>
        <div class="col-span-3 ...">
          {" "}
          
        </div>
      </div> */
}
