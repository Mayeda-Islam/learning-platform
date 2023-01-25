import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const[courseCategory,setCourseCategory]=useState([])
    useEffect(()=>{
        fetch(`https://learning-platform-server-site.vercel.app/course-category`)
        .then(res=>res.json())
        .then(data=>setCourseCategory(data))
    },[])
    return (
        <div className='mt-5 text-center grid grid-cols-2 gap-x-4 lg:grid-cols-1 lg:text-justify '>
            {
        courseCategory.map(category=><p className='mt-5 font-bold active:bg-red-400' key={category.id} category={category}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>)
     }
        </div>
    );
};

export default LeftSideNav;