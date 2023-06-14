import React, { useEffect, useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


// TODO: Provide pusblishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [selectedClass, setSelectedClass] = useState(null);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // `/selectedClasses/${id}`
        axiosSecure.get(`/selectedClasses/${id}`)
            .then(response => {
                setSelectedClass(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id])

    console.log(selectedClass);


    if (!selectedClass) {
        return <div>
            <button className="btn btn-square">
                <span className="loading loading-spinner"></span>
            </button>
        </div>;
    }


    return (
        <div className='pt-24 py-4'>
            <h2 className='text-3xl font-semibold my-4 text-center'>Payment Section</h2>

            <Elements stripe={stripePromise}>
                <CheckOutForm selectedClass={selectedClass}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;