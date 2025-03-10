import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data);
        // alert("Form Submitted! ✅ Check console.");
    };

    return (
        <>
            <div>
                {/* Button to Open Modal */}
                <label htmlFor="my-modal-3" className="btn">Login</label>

                {/* Modal */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Login</h3>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
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

                            {/* Submit Button & Signup Link */}
                            <div className="flex justify-around mt-4">
                                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Login
                                </button>
                                <p>
                                    Not Registered? 
                                    <Link to={"/signup"} className="underline text-blue-500 cursor-pointer"> Signup</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
