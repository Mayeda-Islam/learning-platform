import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Result } from "postcss";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthProvider";
const Login = () => {
  const { user, userSignIn, loginWithGoogle,signInWithGithub } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // log in with email and password
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  console.log(user);
  //    log in with google
  const handleLogInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    loginWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleSignInGithub=()=>{
    
const githubProvider = new GithubAuthProvider();
    signInWithGithub(githubProvider)
    .then(result=>{
        const user=result.user
        console.log(user)
    })
    .catch(error=>{
        const errorMessage=error.errorMessage
        console.log(errorMessage)
        console.error(error)
    })
  }
  return (
    <>
      <div
        onSubmit={handleSignIn}
        style={{ color: "black" }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login First!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <div className="form-control "></div>
            </div>
          </form>
          <div className=" card flex-shrink-0 w-full max-w-sm ">
            <button
              onClick={handleLogInGoogle}
              className="btn btn-outline btn-accent"
            >
              <FaGoogle
                style={{
                  width: "20px",
                  height: "35px",
                  marginRight: "10px",
                }}
              />
              Login with Google
            </button>
            <br />
            <button onClick={handleSignInGithub} className="btn btn-outline ">
              <FaGithub
                style={{
                  width: "20px",
                  height: "35px",
                  marginRight: "10px",
                }}
              />
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <div className="mb-5">
<button
    onClick={handleLogInGoogle}
    className="btn btn-outline btn-accent"
  >
    <FaGoogle
      style={{
        width: "20px",
        height: "35px",
        marginRight: "10px",
      }}
    />
    Login with Google
  </button>
  <button className="btn btn-outline ">
    <FaGithub
      style={{
        width: "20px",
        height: "35px",
        marginRight: "10px",
      }}
    />
    Login with Github
  </button>
</div> */
}
