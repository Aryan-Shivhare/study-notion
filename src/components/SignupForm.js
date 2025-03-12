import React,{useState} from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
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
        if(formData.password!=formData.confirmPassword) {
            toast.error("Password do not match.");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData,
            accountType
        }
        console.log("Finally");
        console.log(finalData);
        navigate("/study-notion/dashboard");
    }
  return (
    <div>
        <div className='bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max flex xyz'>
            <button
            className={`${accountType === "student"
            ? "bg-richblack-900 text-richblack-5" 
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full translate-all duration-200`}
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType === "instructor"
            ? "bg-richblack-900 text-richblack-5" 
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full translate-all duration-200`}
            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                    />
                </label>
                <label className='w-full'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                    />
                </label>
            </div>
            <div className='mt-[20px]'>
                <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                    />
                </label>
            </div>
            <div className='w-full mt-[20px] gap-x-4 flex'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showPassword?('text'):('password')}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                    />
                    <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=>setshowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showConfirmPassword?('text'):('password')}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        className='xyz bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
                    />
                    <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=>setshowConfirmPassword((prev)=>!prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
            <button className='w-full bg-yellow-500 rounded-[8px] text-richblack-900 px-[12px] py-[8px] font-medium mt-6'>Create Account</button>
        </form>
    </div>
  );
}

export default SignupForm;