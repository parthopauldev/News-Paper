import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    let navigate=useNavigate()
    let { logIn } = use(AuthContext);
    let location = useLocation()
    console.log(location);
    
    let handleLogin = (e) => {
        e.preventDefault()
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        console.log(email, password);
        logIn(email,password)
            .then((result) => {
                let user = result.user;
                console.log(user);
                navigate(`${location.state?location.state:'/'}`)
                
            })

            .catch(err => {
                console.log(err.message);
                alert(err.message)
            
        })
        
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body py-5">
                    <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                    <fieldset className="fieldset">
                        {/* email  */}
          <label className="label">Email</label>
                        <input type="email" name='email' required className="input" placeholder="Email" />
                        {/* password  */}
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        
                    </fieldset>
                    <p className='font-semibold text-center py-5'>Dont’t Have An Account ?{"  "}  <Link className='text-secondary' to='/auth/register'>Register</Link> </p>
      </form>
    </div>
        </div>
    );
};

export default Login;