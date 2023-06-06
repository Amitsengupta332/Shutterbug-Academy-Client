import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLink =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to=''>Instructors</Link></li>
            <li><Link to=''>Classes</Link></li>
            {/* { */}
            {/* // user?.email ? */}
            <>
                <li><Link to=''>Dashboard</Link></li>
                <li><Link to='addToys'>UserProfile</Link></li>
                <li><button   >Log Out</button></li> </>
            {/* : */}
            <li><Link to='/login'>Login</Link></li>
            {/* } */}
        </>
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img src="https://i.ibb.co/nn8fPHd/DALL-E-2023-06-06-23-54-13-photography-logo.png" alt="" className='avatar' width='50px' height='50px' />
                    <Link>Photography School</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul> */}
                    
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;