import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900 mt-5'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8 pt-12'>
                    <img src="https://media.istockphoto.com/id/1067573454/photo/3d-word-oops.jpg?b=1&s=612x612&w=0&k=20&c=sigVwta68SrP8DN-CLIfyI7l81YMpgQEmhBxsvOsp1Q="  alt="" />
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                            <span className='sr-only'>Error</span>
                            {status || 404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;