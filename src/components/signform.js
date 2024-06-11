import React from "react";

import { useNavigate } from "react-router-dom";

import './style.css';

export const SignUpForm = () => {

    return(
        <>
            <div className='mt-5'>
                <form>
                    <h3>Sign Up</h3>
                    <label>
                        Email or mobile number
                        <br/>
                        <input type='text' placeholder=''/>
                    </label>
                    <br/>
                    <label>
                        Password
                        <br/>
                        <input type='text' placeholder=''/>
                    </label>
                    <br/>
                    <p className="btn">Sign In</p>
                    <p className="btn-outline">Google</p>
                    <br/>
                    <label>
                        <input type="checkbox" />
                        I agree with the terms and service
                    </label>
                </form>
                <TextSignUp/>
                <Text/>
            </div>
        </>
    );
};

export const SignInForm = () => {
    return(
        <>
            <form>
                <h3>Sign In</h3>
                <label>
                    Email or mobile number
                    <br/>
                    <input type='text' placeholder=''/>
                </label>
                <br/>
                <label>
                    Password
                    <br/>
                    <input type='text' placeholder=''/>
                </label>
                <br/>
                <p className="btn">Sign In</p>
                <p className="btn-outline">Google</p>
                <br/>
                <label>
                    <input type="checkbox" />
                    Remember me
                </label>
            </form>
            <TextSignIn/>
            <Text/>
        </>
    );
}

const TextSignIn = () => {
    const navigate = useNavigate();
    return(
        <>
            <p className='mt-2'>New to Movix? <a onClick={() => navigate('/signup')} className='fw-bold text-black' style={{textDecoration:'none'}}>Sign up now</a></p>
        </>
    );
}

const TextSignUp = () => {
    const navigate = useNavigate();
    return(
        <>
            <p className='mt-2'>Already have an account? <a onClick={() => navigate('/signin')} className='fw-bold text-black' style={{textDecoration:'none'}}>Sign in now</a></p>
        </>
    );
}

const Text = () => {
    return(
        <>
            <p className='w-75'>Text page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='text-primary'>Learn more.</a></p>
        </>
    );
}