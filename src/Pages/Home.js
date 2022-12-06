import React from 'react';
import img from  '../assests/banner.png'
const Home = () => {
    return (
        <div>
            <img className='w-full h-screen object-cover' src={img} alt="" />
        </div>
    );
};

export default Home;