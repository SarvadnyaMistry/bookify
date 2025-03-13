// import React, { createContext, useState, useContext } from 'react';
// export const AuthContext=createContext()

// export default function Authprovider({children}) {
//   const initialAuthUser=localStorage.getItem("Users");
//   const [authUser,setAuthUser] = useState(
//     initialAuthUser? JSON.parse(initialAuthUser):undefined
//   )
//   return(
//     <AuthContext.Provider value={[authUser,setAuthUser]}>
//         {children}
//     </AuthContext.Provider>
//   )
// }
// export const useAuth = ()=>useContext(AuthContext)
// import React, { createContext, useState, useContext } from 'react';

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users")
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  )

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}> {/* ✅ Provide an object */}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) // ✅ Make sure useContext is used correctly
