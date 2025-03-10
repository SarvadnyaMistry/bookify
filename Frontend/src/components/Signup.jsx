// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'



// function Signup() {
//      const {
//             register,
//             handleSubmit,
//             formState: { errors },
//         } = useForm();
    
//         // Function to handle form submission
//         const onSubmit = (data) => {
//             console.log(data);
//             // alert("Form Submitted! ✅ Check console.");
//         };
//   return (
// <>

// <div className='flex flex-col items-center justify-center min-h-screen bg-gray-10 border-[5px] shadow-md'>
// <h3 className='font-bold text-lg'>Sign up</h3>
//     {/* Name */}
//     <div className='mt-4 space-y-2'> 
//         <span>Name</span> <br />
//         <input type="text" placeholder='Enter your Full Name' className='w-80 px-3 py-1 border rounded-md outline-none'  />
//     </div>
//     {/* Email */}
//     <div className='mt-4 space-y-2'> 
//         <span>Email</span> <br />
//         <input type="email" placeholder='Enter your email here' className='w-80 px-3 py-1 border rounded-md outline-none'  />
//     </div>
//     {/* Password */}
//     <div className='mt-4 space-y-2'>
//         <span>Password</span> <br />
//         <input type="text" placeholder='Enter your password here' className='w-80 px-3 py-1 border rounded-md outline-none'  />
//     </div>
//     {/* Button */}
//     <div className='flex space-x-12 mt-4'>
//     <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
//     <p className='ml-10'>Have Account? {""}
//         <button  className='underline text-blue-500 cursor-pointer'
//         onClick={()=>
//             document.getElementById("my_modal_3").showModal()
//         }
//         ></button> </p>

//         <Login/>
//     </div>
    
//     </div>
// </>
// )
// }

// export default Signup

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log("Signup Successful ✅", data);
        alert("Signup Successful ✅ Check console.");
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 border-[5px] shadow-md p-6">
                <h3 className="font-bold text-lg">Sign Up</h3>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                    {/* Name Field */}
                    <div>
                        <label>Name</label> <br />
                        <input
                            type="text"
                            placeholder="Enter your Full Name"
                            className="w-80 px-3 py-1 border rounded-md outline-none"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label>Email</label> <br />
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-80 px-3 py-1 border rounded-md outline-none"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label>Password</label> <br />
                        <input
                            type="password"
                            placeholder="Enter your password here"
                            className="w-80 px-3 py-1 border rounded-md outline-none"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button & Login Link */}
                    <div className="flex justify-around mt-4">
                        <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                            Signup
                        </button>
                        <p>
                            Have an account?{" "}
                            <label htmlFor="my-modal-3" className="underline text-blue-500 cursor-pointer">
                                Login
                            </label>
                        </p>
                    </div>
                </form>
            </div>

            {/* Include Login Component (Modal Trigger) */}
            <Login />
        </>
    );
}

export default Signup;
