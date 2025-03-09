import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"", password:""
    });
    const [showPassword, setShowPassword] = useState(false);
    function changeHandler (event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler (event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Finally");
        console.log(formData);
        navigate("/dashboard");
    }
  return (
    <div>
        <form 
        className='flex flex-col w-full gap-y-4 mt-6'
        onSubmit={submitHandler}>
            <label className='w-full'>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email address'
                    name="email"
                    className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword?('text'): ('password')}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name="password"
                    className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                />
                <span 
                className="absolute right-3 top-[38px] cursor-pointer " 
                onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to="#">
                    <p className='max-w-max text-xs ml-auto text-blue-100 mt-1'>Forgot Password</p>
                </Link>
            </label>
            <button className='bg-yellow-500 rounded-[8px] text-richblack-900 px-[12px] py-[8px] font-medium mt-6'>
                Sign In
            </button>
        </form>
    </div>
  );
}

export default LoginForm;