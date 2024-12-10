import React, { useContext } from "react";
import loginAnimation from "../../assets/lottie_JSON/Animation - 1733867489260.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold  mt-9 text-center ">Login Now!</h1>{" "}
      <div className="w-[90%] mx-auto flex flex-row  mt-11  ">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl h-fit mt-40 ">
          <form onSubmit={handleLogin} className="card-body">
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
          </form>
        </div>
        <div className=" items-center ">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
