import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from "@material-tailwind/react";
import myContext from '../../../context/data/myContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

function SignUp() {
    const { mode } = useContext(myContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (email === "" || password === "") {
            toast.error('Please fill all fields');
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Sign up successful');
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Sign up failed');
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto max-w-sm py-6">
            <div className="p-5" style={{
                background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
                borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
            }}>
                <Typography
                    variant="h4"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                >
                    Sign Up
                </Typography>
                <div className="mb-3">
                    <input
                        type="email"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Email"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)'
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Password"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)'
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button className="w-full mt-5" onClick={handleSignUp}
                    style={{
                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                        color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
                    }}
                > Sign Up </Button>
                <div className="mt-3 text-center">
                    <Typography variant="small" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        Already have an account? <Link to="/login" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>Log In</Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
