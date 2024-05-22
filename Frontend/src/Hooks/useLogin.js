import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { userAuthContext } from '../context/AuthContext'

const useLogin = () => {

  const success = handleInputErrors({email, password})
  if(!success) return; 
  const [loading, setLoading] = useState(false)
  const {setAuthUser}= userAuthContext()

  const login = async (email, password) => {
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({email, password})
        })
        const data = await res.json()
        if (data.error) {
            throw new Error(data.error)
        }

        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)
    }
    catch(error) {
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
  }
  return {loading, login};
}

export default useLogin

function handleInputErrors({email, password}) {
    if (!email || !password) {
        toast.error('Please fill in all fields!')
        return false
    }

    return true
}