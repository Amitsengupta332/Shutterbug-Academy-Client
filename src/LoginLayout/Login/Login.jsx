import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const from = location.state?.from?.pathname || '/'

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm   bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email', { required: true })}
                                        className="input input-primary w-full"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">Email is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <div className="flex items-center">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            {...register('password', { required: true })}
                                            className="input input-primary w-full pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="ml-2 focus:outline-none"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash className="text-gray-600" />
                                            ) : (
                                                <FaEye className="text-gray-600" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">Password is required</p>
                                    )}

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New to Shutterbug Academy? please
                                <Link className='text-orange-600 font-bold ml-2' to="/signUp">
                                    Sign Up
                                </Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;