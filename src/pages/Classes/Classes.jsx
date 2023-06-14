import React, { useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useAuth from '../../hooks/useAuth';
import usePopularClass from '../../hooks/usePopularClass';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelectedClasses from '../../hooks/useSelectedClasses';

const Classes = () => {
    const [isAdmin] = useAdmin();
    // console.log(isAdmin)
    const [isInstructor] = useInstructor();
    // console.log(isInstructor);
    const { user } = useAuth();
    console.log(user);
    const [addClass, ,] = usePopularClass();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedClasses, refetch] = useSelectedClasses();


    const classes = addClass.filter((clas) => clas.status === 'approved');

    const from = location.state?.from?.pathname || '/login'

    const handleSelectCourse = (clas) => {
        // console.log(clas);

        if (user && user.email) {
            // const { _id, iName, email, seats, photo, status, name, price } = clas;

            const classData = {
                _id: clas._id,
                iName: clas.iName,
                email: user?.email,
                seats: clas.seats,
                photo: clas.photo,
                status: clas.status,
                name: clas.name,
                price: clas.price,
            };
            console.log(classData)

            fetch('https://summer-camp-school-server-psi.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(classData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        const responseData = data.data; // Extract the response data
                        console.log(responseData); // Log the extracted response data
                        // refetch();
                    }
                })
                .catch((error) => {
                    console.error('Error occurred while selecting a class:', error);
                    // console.error('Error occurred while selecting a class:', error);

                });
        } else {
            // Handle case when user is not logged in
            console.log('Please login to select the class');
            // navigate('/login', { state: { from: location.pathname } });
            navigate(from, { replace: true })
        }
        // console.log(classData);

    }

    const isClassSelected = (clas) => {
        // console.log(clas);
        if (clas?.email)
            return selectedClasses?.some((selectedClass) => selectedClass?._id === clas?._id);
    };


    return (
        <div className='pt-24 py-4'>
            <h2 className='text-3xl font-semibold my-4 text-center'>All Class Here</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    classes.map((clas, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={clas?.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class Name: {clas?.name}</h2>
                                <p className="card-title text-xl">Instructor name: {clas?.iName}</p>
                                <p className="card-title text-lg">Available seats: {clas?.seats}</p>
                                <p className="card-title text-md">Price: ${clas?.price}</p>
                                <div className="card-actions justify-end">
                                    {isAdmin || isInstructor ? (<button className="btn bg-red-500" disabled >
                                        select
                                    </button>) : (isClassSelected(clas)) ? (
                                        <button className="btn bg-green-500" >
                                            Selected
                                        </button>
                                    ) : (
                                        <button onClick={() => handleSelectCourse(clas)} className="btn bg-emerald-200">
                                            Select
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Classes;