import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
    const[loading, setloading] = useState(false);

    const signup = async({fullName, username, email, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, email, password, confirmPassword, gender})
        if(!success) return;

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({fullName, username, email, password, confirmPassword, gender})
            })

            const data = await res.json();
            console.log(data)
        }
        catch (error) {
            toast.error(error.message)
        } finally {
            setloading(false);
        }
        
    };
    return {loading, signup};
}

export default useSignup


function handleInputErrors({fullName, username, email, password, confirmPassword, gender}) {
    if (!fullName ||!username || !email || !password || !confirmPassword || !gender ) {
        toast.error('Please fill in all fields!')
        return false
    }

    if (password, confirmPassword.length < 6) {
        toast.error('Password must be atleast 6 characters')
        return false
    }
    
    if (password !== confirmPassword) {
        toast.error('Password do not match')
        return false
    }
    return true
}