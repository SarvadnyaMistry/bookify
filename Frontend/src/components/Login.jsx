// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import toast from 'react-hot-toast';
// function Login() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     // Function to handle form submission
//     const onSubmit = async(data) => {
//         // console.log(data);
//         // alert("Form Submitted! ✅ Check console.");
//         const userInfo = {

//             email: data.email,
//             password: data.password,
//         }
//        await axios.post("http://localhost:4001/user/login",userInfo)
//         .then((res)=>{
//             console.log(res.data)
//             if(res.data){
//                 // alert("Login Successfull")
//                 toast.success('Login Successfull');
//                 setTimeout(()=>{
//                 localStorage.setItem("Users",JSON.stringify(res.data.user));

//                 },3000)
//             }
//         })
//         .catch((err)=>{
                        
//             if(err.response){
//                 console.log(err)
//             // alert("Error:"+err.response.data.message)
//             toast.error("Error:"+err.response.data.message);
//             setTimeout(()=>{},3000)

//             }
//         })
//     };

//     return (
//         <>
//             <div>
//                 {/* Button to Open Modal */}
//                 <label htmlFor="my-modal-3" className="btn">Login</label>

//                 {/* Modal */}
//                 <input type="checkbox" id="my-modal-3" className="modal-toggle" />
//                 <div className="modal">
//                     <div className="modal-box relative">
//                         <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                         <h3 className="text-lg font-bold">Login</h3>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
//                             {/* Email Field */}
//                             <div>
//                                 <label>Email</label> <br />
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email here"
//                                     className="w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("email", { required: "Email is required" })}
//                                 />
//                                 {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                             </div>

//                             {/* Password Field */}
//                             <div>
//                                 <label>Password</label> <br />
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password here"
//                                     className="w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("password", { required: "Password is required" })}
//                                 />
//                                 {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//                             </div>

//                             {/* Submit Button & Signup Link */}
//                             <div className="flex justify-around mt-4">
//                                 <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                                     Login
//                                 </button>
//                                 <p>
//                                     Not Registered? 
//                                     <Link to={"/signup"} className="underline text-blue-500 cursor-pointer"> Signup</Link>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider"; // ✅ Import useAuth

function Login() {
    const { setAuthUser } = useAuth(); // ✅ Get setAuthUser from Auth context

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Function to handle login submission
    const onSubmit = async (data) => {
        try {
            const userInfo = {
                email: data.email,
                password: data.password,
            };

            const res = await axios.post("http://localhost:4001/user/login", userInfo);

            if (res.data) {
                toast.success("Login Successful!");

                // ✅ Save user data to local storage
                localStorage.setItem("Users", JSON.stringify(res.data.user));

                // ✅ Update Auth state
                setAuthUser(res.data.user);

                // ✅ Refresh page to reflect changes
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        }
    };

    return (
        <>
            <div>
                {/* Button to Open Modal */}
                <label htmlFor="login-modal" className="btn">Login</label>

                {/* Modal */}
                <input type="checkbox" id="login-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Login</h3>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                            {/* Email Field */}
                            <div>
                                <label>Email</label> <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
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
                                    placeholder="Enter your password"
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
