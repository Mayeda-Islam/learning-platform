import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import CheckOutCourse from "./CheckOutCourse";

const CheckOut = () => {
  const checkCourse = useLoaderData();
  const navigate=useNavigate()
  const { _id, title, author, details, image_url, total_views, rating } =
    checkCourse[0];
  return (
    <div className="container mx-auto mt-14 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>{navigate(-1)}} className="btn btn-primary">Back </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
