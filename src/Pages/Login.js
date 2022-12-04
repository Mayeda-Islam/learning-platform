import { Result } from "postcss";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthProvider";
const Login = () => {
    const {user,userSignIn}=useContext(AuthContext)
   const handleSignIn=e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value
    const password=form.password.value;
    userSignIn(email,password)
    .then(result=>{
        const user=result.user
        form.reset()
        console.log(user)
    })
    .catch(error=>console.error(error))
   }
   
    console.log(user)
  return (
    <>
      <form onSubmit={handleSignIn}>
      <div style={{ color: "black" }} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login First!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control ">
              <button className="btn btn-outline btn-accent">
                <FaGoogle style={{width:'20px',height:'35px',marginRight:'10px'}}/>
                Login with Google</button>
              </div>
              <div className="form-control ">
              <button className="btn btn-outline ">
                <FaGithub style={{width:'20px',height:'35px',marginRight:'10px'}}/>
                Login with Github</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </form>

      
    </>
  );
};

export default Login;
