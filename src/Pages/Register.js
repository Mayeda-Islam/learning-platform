import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, signUpWithEmail } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(email, name, password, photoURL);
    signUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error);
        setError(errorMessage);
      });
  };
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
                required
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
                required
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
                required
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
                required
              />
              <p className="text-error">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <p className=" mt-4">
                Already have an account?Please{" "}
                <Link to={"/login"} className="link link-hover text-primary">
                 login
                </Link>{" "}
                
              </p>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
