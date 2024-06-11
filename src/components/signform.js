import React from "react";

import { ShortFooter } from '../components/footer';

import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form'

export const SignUpForm = () => {

    return(
        <>
            <form className="mt-5">
                <h3 className="fw-bold mb-4">Sign Up</h3>
                <label>
                    Email or mobile number
                    <br/>
                    <InputText/>
                </label>
                <br/>
                <label className="mt-2 mb-3">
                    Password
                    <br/>
                    <InputPass/>
                </label>
                <br/>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label mx-2 mb-3" for="flexCheckDefault">
                    I agree with the terms and service
                </label>
                <br/>
                <button style={{width:'18.5em'}} type='button' className="btn btn-light mt-3 mb-3 fw-bold">Sign Up</button>
                <button style={{width:'18.5em'}} type='button' className="btn-outline fw-bold">Google</button>
            </form>
            <TextSignUp/>
            <Text/>
            <ShortFooter/>
        </>
    );
};

export const SignInForm = () => {
    return(
        <>
            <form className="mt-5">
                <h3 className="fw-bold mb-4">Sign In</h3>
                <label>
                    Email or mobile number
                    <br/>
                    <InputText/>
                </label>
                <br/>
                <label className="mt-2 mb-3">
                    Password
                    <br/>
                    <InputPass/>
                </label>
                <br/>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label mx-2 mb-3" for="flexCheckDefault">
                    Remember me
                </label>
                <br/>
                <button style={{width:'18.5em'}} type='button' className="btn btn-light mt-3 mb-3 fw-bold">Sign In</button>
                <button style={{width:'18.5em'}} type='button' className="btn-outline fw-bold">Google</button>
            </form>
            <TextSignIn/>
            <Text/>
            <ShortFooter/>
        </>
    );
}

const InputText = () => {
    return(
        <Form className="d-flex">
            <Form.Control
            type="text"
            placeholder=""
            className="me-2 my-2"
            style={{width:'18.5em'}}
            />
        </Form>
    );
}

const InputPass = () => {
    return(
        <Form className="d-flex">
            <Form.Control
            type="pass"
            placeholder=""
            className="me-2 mt-2"
            style={{width:'18.5em'}}
            />
        </Form>
    );
}

const TextSignIn = () => {
    const navigate = useNavigate();
    return(
        <>
            <p className='my-3'>
                New to Movix?
                <a onClick={() => navigate('/signup')} 
                className='fw-bold text-white' 
                style={{textDecoration:'none'}}>
                    <span> </span>Sign up now
                </a>
            </p>
        </>
    );
}

const TextSignUp = () => {
    const navigate = useNavigate();
    return(
        <>
            <p className='my-3'>
                Already have an account?
                <a onClick={() => navigate('/signin')} 
                className='fw-bold text-white' style={{textDecoration:'none'}}>
                    <span> </span>Sign in now
                </a>
            </p>
        </>
    );
}

const Text = () => {
    return(
        <>
            <p className='w-75 text-sec mt-4'>Text page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='text-primary'>Learn more.</a></p>
        </>
    );
}