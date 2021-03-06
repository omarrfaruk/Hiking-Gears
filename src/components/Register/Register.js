import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background from '../../img/registerbg.jpg';
import logo from '../../img/logo.png'
import Social from '../Social/Social';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errors;

    if (user) {
        console.log(user);
    }
    if (loading) {
        return <Spinner></Spinner>;
    }

    if (error) {
        errors = <p>Error: {error.message}</p>
    }

    const handleSignUp = async (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            navigate('/')
        }
        else {
            return alert('password did not matched')
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
                <form onSubmit={handleSignUp} className='w-50 mx-auto'>
                    <div className="form-group my-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' placeholder="Your Name" required />
                    </div>
                    <div className="form-group my-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" required />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" name='confirmPassword' id="exampleInputPassword1" placeholder="Confirm Password" required />
                    </div>
                    {errors}
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                    <p className='my-2 text-center'>or</p>
                    <Social></Social>
                    <small className='d-block text-start mt-2 mb-3'>Already in Hikeventures?<Link to='/login'> Log in</Link></small>
                </form>
            </div>
        </div >
    );
};

export default Register; 