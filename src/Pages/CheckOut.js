import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";

import { FaCircleNotch, FaDownload, FaEye } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PDFFile from "../Others/PDFFile";
const CheckOut = () => {
  const checkCourse = useLoaderData();
  const navigate=useNavigate()
  const { _id, title, author, details, image_url, total_views, rating } =
    checkCourse[0];
  return (
    <div className="container bg-transparent  text-dark relative mx-auto mt-14 card w-96 bg-base-100 shadow-2xl">
      <figure >
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="absolute top-2 right-2 ">
      <PDFDownloadLink document={<PDFFile  course={checkCourse[0]}/>}  filename="FORM">
        {({ loading }) =>
          loading ? (
            <button className="text-warning"><FaCircleNotch/></button>
          ) : (
            <button className="text-warning"><FaDownload/></button>
          )
        }
      </PDFDownloadLink>
      </div>
      <div className="card-body ">
        <h2 className="card-title  ">{title}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>{navigate(-1)}} className="btn btn-primary">Back </button>
        </div>
      </div>
      
    </div>
  );
};

export default CheckOut;
