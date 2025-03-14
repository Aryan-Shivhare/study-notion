import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';
const Navbar = (props) => {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/study-notion">
            <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
        </Link>
        <nav>
          <ul className='flex gap-x-6 text-richblack-100'>
            <li>
              <Link to="/study-notion">Home</Link>
            </li>
            <li>
              <Link to="/study-notion">About</Link>
            </li>
            <li>
              <Link to="/study-notion">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
          { !isLoggedIn &&
            <Link to="/study-notion/login">
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ' >Log in</button>
            </Link>
          }
          { !isLoggedIn &&
            <Link to="/study-notion/signup">
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
                Sign up
              </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/study-notion">
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ' onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out"); 
              }}>
                Log Out
              </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/study-notion/dashboard">
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>Dashboard</button>
            </Link>
          }
        </div>
    </div>
  );
}

export default Navbar;