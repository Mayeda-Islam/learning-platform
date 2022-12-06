import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";

const CourseDetails = ({ course }) => {
  const { _id, title, author, details, image_url, total_views, rating } =
    course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
