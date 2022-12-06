import React, { useContext, useRef } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Profile = () => {
    const {user,updateUser}=useContext(AuthContext)
    const nameRef=useRef()
    const photoURLRef=useRef()
    const emailRef=useRef()
    const handleUpdateUser=e=>{
        e.preventDefault()
       const name=nameRef.current.value
       const photo=photoURLRef.current.value
       const  email=emailRef.current.value;
       console.log(name,email,photo)
       
        // update user
        updateUser(name,photo)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">User Profile</h1>
      </div>
      <form onSubmit={handleUpdateUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              ref={nameRef}
              defaultValue={user?.displayName}
              placeholder="Full name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              ref={photoURLRef}
              defaultValue={user?.photoURL}
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              ref={emailRef}
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>;
        </div>
    );
};

export default Profile;
