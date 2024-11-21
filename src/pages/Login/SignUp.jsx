import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, createUser, googleSignIn } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    if (password !== confirmPassword) {
      setError("Err: Your Pass did not match ");
      return;
    } else if (password.length < 6) {
      setError("Err: password length must be 6 or longer");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Err: Please add at least one upperCase");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("user has been create successfully");
        varificationEmail(result.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  const varificationEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        alert("Please varify email");
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
    <section className="w-full md:w-8/12 lg:w-4/12 mx-auto min-h-screen">
      <div className="hero-content">
        <div className="card shadow-2xl ">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="text-center ">
              <h1 className="text-3xl font-bold">Create An Account</h1>
            </div>
            <div className="md:flex gap-x-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-x-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password*</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <div>
              <p className="label-text">
                <small>Alreadu have an account? </small>
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
            <h3 className="text-center">Or</h3>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-primary"
            >
              <FaGoogle></FaGoogle>
              CONTINUE WITH GOOGLE
            </button>
          </form>
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <p className="text-green-500">{success}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
