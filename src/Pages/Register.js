import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const Register = () => {
    const {user,signUpWithEmail}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const photoURL=form.photoURL.value
        const password=form.password.value
        console.log(email,name,password,photoURL)
        signUpWithEmail(email,password)
        .then(result=>{
            const user=result.user
            form.reset()
            console.log(user)
        })
        .catch(error=>console.log(error))
    }
  return (
    <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold"> Please Register First</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                name="name"
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
                name="photoURL"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
