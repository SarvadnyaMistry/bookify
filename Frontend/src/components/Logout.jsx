// import React from 'react'
// import { useAuth } from '../context/Authprovider'

// function Logout() {
//     const [authUser,setAuthUser]= useAuth()
//     const handleLogout =()=>{
//         try {
//             setAuthUser({
//                 ...authUser,
//                 user:null
//             })
//             localStorage.removeItem("Users")
//             toast.success("Logout Successfully")
//             window.location.reload();
//         } catch (error) {
//             toast.error("Error:"+error.message)
//         }
//     }
//   return (
//     <div>
//         <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
//             Logout
//         </button>
//     </div>
//   )
// }

// export default Logout
import React from 'react';
import { useAuth } from '../context/Authprovider'; // ✅ Ensure correct path
import toast from 'react-hot-toast';

function Logout() {
    const { authUser, setAuthUser } = useAuth(); // ✅ Correctly destructure

    const handleLogout = () => {
        try {
            setAuthUser(null); // ✅ Set user to null
            localStorage.removeItem("Users"); // ✅ Remove user data
            toast.success("Logout Successfully");
            window.location.reload(); // ✅ Refresh page to reflect logout
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };

    return (
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
