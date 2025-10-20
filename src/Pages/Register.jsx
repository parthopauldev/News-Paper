import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  let{createUser,setUser}=use(AuthContext)
  let handleRegister = (e) => {
    e.preventDefault()
    let form = e.target;
    let name = form.name.value;
    let photo = form.photo.value;
    let email = form.email.value;
    let password = form.password.value;
    
    console.log(name, password, email, photo);
    createUser(email, password)
      .then(result => {
        let user = result.user;
        setUser(user)
        // console.log(user);
        
      })
      .catch(err => {
      console.log(err.message);
      
    })
    
   };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Your Name </label>
            <input type="text" name="name" required className="input" placeholder=" Enter Your name" />
            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input type="text" name="photo" required  className="input" placeholder="Enter Your URL" />
    
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" required name="email" placeholder="Email" />
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" className="input" required name="password" placeholder="Password" />
           
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="font-semibold text-center py-5">
            Allready  Have An Account ?{"  "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>{" "}
          </p>
        </form> 
      </div>
    </div>
  );
};

export default Register;
