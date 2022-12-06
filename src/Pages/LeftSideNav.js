import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const[courseCategory,setCourseCategory]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/course-category`)
        .then(res=>res.json())
        .then(data=>setCourseCategory(data))
    },[])
    return (
        <div className='mt-5'>
            {
        courseCategory.map(category=><p className='mt-5 font-bold active:bg-red-400' key={category.id} category={category}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>)
     }
        </div>
    );
};

export default LeftSideNav;