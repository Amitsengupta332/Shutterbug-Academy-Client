const handleRegister = event => {
  event.preventDefault();
  setSuccess('');
  setError('');

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;
  const confirmPassword = form.pass.value;
  console.log(name, email, photo, password, confirmPassword);

  if (password.length < 6) {
      setError('Password must be at least 6 characters long');
  } else if (!/[A-Z]/.test(password)) {
      setError('Password must have at least one capital letter');
  } else if (!/[!@#$&*]/.test(password)) {
      setError('Password must have at least one special character');
  } else {
      setError("Password meets the specified conditions.");
  }

  createUser(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
      })
      .catch(error => {
          console.log(error)
          setError(error.message)
      })
}




import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);

    
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 ">
                        <img src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Register</h1>
                            {/* onSubmit={handleRegister} */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600"> Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600"> Email is required</span>}
                                </div>
                                {/* pass */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'minLength' && <p className="text-red-600"> Password  must be 6 characters </p>}

                                    {errors.password?.type === 'maxLength' && <p className="text-red-600"> Password must be less than 20 characters</p>}

                                    {errors.password?.type === 'pattern' && <p className="text-red-600"> Password must have one Upper case, one lower case, one special character</p>}
                                </div>
                                {/* confirm pass */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword", { required: true })} name='confirmPassword' placeholder="Confirm-Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600"> PhotoURL is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login"> Login</Link></p>

                            <p className='text-center mt-3 text-red-500 mb-5' >
                                {error}
                            </p>
                            <p className='text-center mt-3 text-green-500 mb-5' >
                                {success}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;