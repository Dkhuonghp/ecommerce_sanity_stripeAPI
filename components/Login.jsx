import React from 'react'
import { Typography, Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
export default function Login() {
    const auth = getAuth()

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
    
        console.log({res});
    }
    
    // if (localStorage.getItem('accessToken')) {
    //     return <Navigate to="/" />
    // }

    return (
        <>
            <Typography>Wellcome To Note App</Typography>
            <Button variant='outlined' onClick={handleLoginWithGoogle}>
                Login with Google
            </Button>
        </>
    )
}
