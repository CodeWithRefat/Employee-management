import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [userData, setuserData] = useState(null)

    useEffect(() => {
      const {admin, employees} = getLocalStorage()
      setuserData({admin, employees})
    }, [])
    

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
