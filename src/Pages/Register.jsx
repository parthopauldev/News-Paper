import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Your Name </label>
            <input type="text" name="name" className="input" placeholder=" Enter Your name" />
            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input type="text" name="url"  className="input" placeholder="Enter Your URL" />
    
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
           
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="font-semibold text-center py-5">
            Allready  Have An Account ?{"  "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>{" "}
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Register;
