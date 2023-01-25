import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import LeftSideNav from "./LeftSideNav";

const Courses = () => {
  const allCourse = useLoaderData();
  console.log(allCourse);
  return (
    <div className="container h-full mx-auto">
      <div class="lg:grid pb-44 grid-cols-4 gap-4 flex flex-col ">
        <div className="mx-auto  lg:block">
          <LeftSideNav></LeftSideNav>
        </div>
        <div class="col-span-3 ...">
          {" "}
          <div className="grid pb-32 h-full grid-cols-1 lg:grid-cols-2 gap-4">
            {allCourse.map((course) => (
              <CourseDetails course={course} key={course._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

// className="grid  grid-cols-3 gap-4"
