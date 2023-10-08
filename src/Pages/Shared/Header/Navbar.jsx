import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
 const {user, logOut} = useContext(AuthContext);

 const handleLogOut = () =>{
  logOut()
  .then(() =>{
    return toast('Sign out success')
  })
  .catch(error =>{
    return toast(error.message);
  })
 }

  const navLinks = <>
   <li><NavLink to="/">Home</NavLink></li>
   {
     user && <>
     <li><NavLink to="/services">Services</NavLink></li>
     <li><NavLink to="/events">Events</NavLink></li>    
    </>
   }
   <li><NavLink to="/about">About</NavLink></li>
   <li><NavLink to="/register">Register</NavLink></li>

  </>

  return (
    <div className="bg-blue-100">

      <div className="navbar container mx-auto items-center flex">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navLinks}
             
            </ul>
          </div>
          <img className="" src="/logo-dark.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}

          </ul>
        </div>
        <div className="navbar-end">
          {user ? <>
            <p>{user.displayName}</p>
            <img className="w-12 rounded-full ml-2" src={user.photoURL} alt="" />
            <Link to="/login" onClick={handleLogOut} className="btn ml-2">Sign Out</Link> 
          </> :
            <Link to="/login" className="btn">Login</Link>
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
