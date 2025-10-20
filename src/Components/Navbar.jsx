import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import user from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    let {user,logOut}=use(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('You Logged Out Seccessfully')
            } )
            .catch((err) => {
            console.log(err);
            
        })
    }
    return (
        <div className='flex  justify-between items-center'>
            <div className="">{user&& user.email }</div>
            <div className="nav flex gap-5 text-accent" >
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={user} alt="" />
                {
                    user? <Link onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</Link>               :<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;