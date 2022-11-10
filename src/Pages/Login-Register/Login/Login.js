import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
// import { useTitle } from '../../../Hook/useTitle'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../Hook/useTitle';

const Login = () => {
    useTitle('Login')
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()
    const { signIn, setLoading, setUser, providerLogin, verifyEmail } = useContext(AuthContext);
    const handleGithubSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);

            })
            .catch(error => console.error(error))

    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                verifyEmail();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }


    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success(' user name or password wrong')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
                toast.error(' user name or password wrong')
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className="hero  min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-orange-200">


                    <form onSubmit={handleSubmit} className="card-body w-96">
                        <h1 className="text-5xl text-white text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <h1 className='text-red-600'>{error}</h1>
                    </form>
                    <div className='card-body flex'>
                        <Link to={'/register'}><p>Create a Account</p></Link>
                        <button className="btn btn-accent"><Link to={'/register'}>Register</Link> </button>
                        <Link> </Link>
                        <div className='card-body flex flex-row justify-around '>
                            <div onClick={handleGoogleSignIn} className='bg-green-200 p-5 rounded-full'><FaGoogle /></div>
                            <div onClick={handleGithubSignIn} className='bg-gray-500 p-5 rounded-full'><FaGithub /></div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;