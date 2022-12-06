import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Result } from "postcss";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
const Login = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    user,
    userSignIn,
    loginWithGoogle,
    setUser,
    signInWithGithub,
    setLoading,
    resetPassword,
  } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // log in with email and password
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          console.log('first')
          toast.error("Please verify your email first")
        }
        form.reset();
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error);
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

 
  //    log in with google
  const handleLogInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    loginWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
      });
  };

  const handleSignInGithub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(errorMessage);
      })
      
  };
  // password reset
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        console.log("email sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <div
        onSubmit={handleSignIn}
        className="hero bg-transparent min-h-screen "
      >
        <div className="hero-content flex-col ">
          <div className="text-center  bg-transparent   lg:text-left">
            <h1 className="text-5xl font-bold">Please Login First!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <form className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
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

                <label className="label">
                  <button
                    onClick={handleResetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="label text-amber-600 mt-4">
                  Haven't any account yet?Please{" "}
                  <Link
                    to={"/register"}
                    className="link label link-hover text-primary"
                  >
                    register
                  </Link>{" "}
                  first
                </p>
              </div>
            </div>
          </form>
          <div className=" card flex-shrink-0 w-full max-w-sm ">
            <button
              onClick={handleLogInGoogle}
              className="btn btn-outline btn-accent "
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
            <button
              onClick={handleSignInGithub}
              className="btn btn-outline bg-base-100"
            >
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
