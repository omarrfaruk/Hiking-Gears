import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import background from '../../img/loginbg.jpg';
import logo from '../../img/logo.png'
import Social from '../Social/Social';
import Spinner from '../Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errors;
    if (error) {
        errors = <p className='text-danger'>{error.message}</p>
    }
    if (loading) {
        return <Spinner></Spinner>;
    }
    if (user) {
        toast('Signed In User')
        navigate(from, { replace: true });
    }

    const handleSignIn = async (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password)
        // const { data } = await axios.post('https://secret-depths-91808.herokuapp.com/login',{ email });
        // console.log(data);
        // localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true });
    };


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }


    return (
        <div
            style=
            {{
                backgroundImage: `url(${background})`,
                height: '80vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}
            className='d-flex flex-column align-items-center justify-content-center style'>

            <div className='w-50 mx-auto bg-white'>
                <div className='d-flex justify-content-center'>
                    <img className='mt-3' height={'80px'} src={logo} alt="" />
                </div>
                <form onSubmit={handleSignIn} className='w-50 mx-auto'>
                    <div className="form-group my-4">
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" required />
                    </div>
                    <div className="form-group mb-1">
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    {errors}
                    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                    <button type="submit" className="btn btn-primary w-100">Log In</button>
                    <p className='my-2 text-center'>or</p>
                    <Social></Social>
                    <small className='d-block text-start mt-2 mb-3'>Not A Member?<Link to='/register'> Sign Up</Link></small>
                </form>
                <Toaster />
            </div>
        </div >
    );
};

export default Login; 