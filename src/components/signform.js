export function SignUpForm() {
    return(
        <>
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
        </>
    );
};

export function SignInForm() {
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

function TextSignIn() {
    return(
        <>
            <p>New to Movix? <a href="/signup">Sign up now</a></p>
        </>
    );
}

function TextSignUp() {
    return(
        <>
            <p>Already have an account <a href="signin">Sign in now</a></p>
        </>
    );
}

function Text() {
    return(
        <>
            <p>Text page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
        </>
    );
}