import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import LeftSideNav from './LeftSideNav';

const Courses = () => {
  const allCourse=useLoaderData()
  console.log(allCourse)
    return (
        <div className='container mx-auto'>
            <div class="grid  grid-cols-4 gap-4">
        <div className='mx-auto'>
           <LeftSideNav></LeftSideNav>
        </div>
        <div class="col-span-3 ...">
          {" "}
           
         <div className="grid  grid-cols-2 gap-4">
         {
            allCourse.map(course=><CourseDetails course={course} key={course._id} />)
          }
         </div>
        </div>
      </div>
        </div>
    );
};

export default Courses;

// className="grid  grid-cols-3 gap-4"