import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from 'axios'
import toast from 'react-hot-toast';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Function to handle form submission
    const onSubmit =async (data) => {
        // console.log("Signup Successful ✅", data);
        // alert("Signup Successful ✅ Check console.");
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
       await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                // alert("Signup Successfull")
                toast.success('Signup Successfull');
                
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        })
        .catch((err)=>{
                        
            if(err.response){
                console.log(err)
            toast.error("Error:"+err.response.data.message)

            }
        })
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
                            {...register("fullname", { required: "Name is required" })}
                        />
                        {errors.fullname && <p className="text-red-500">{errors.name.message}</p>}
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
