import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { logIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("user has been create successfully");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="md:w-1/3 mx-12 md:mx-auto ">
        <div className="hero-content flex-col ">
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body bg-base-200">
              <div className="text-center ">
                <h1 className="text-5xl font-bold">Login</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">OR</div>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-primary"
                >
                  <FaGoogle></FaGoogle>
                  CONTINUE WITH GOOGLE
                </button>
              </div>
              <div>
                <p className="label-text text-center">
                  <small>Are you new? Please </small>
                  <Link to="/signup" className="text-blue-500">
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
            <div className="text-center">
              <p className="text-red-500">{error}</p>
              <p className="text-green-500">{success}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
