import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import axios from "axios";


const CheckOutForm = ({ selectedClass }) => {
    const { price } = selectedClass || [];
    console.log('Price:', price, 'Selected classes', selectedClass)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                }).catch(error => {
                    console.log('Error creating payment intent:', error);
                });
        }
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card', card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('PaymentMethod', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
        )


        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                selectedClassItem: selectedClass._id,
                classItem: selectedClass._id,
                status: 'service pending',
                itemName: selectedClass.name,
                image: selectedClass.photo,
                instructorName: selectedClass.iName,

            }
            console.log(payment);

            axiosSecure.post(`/payments/${selectedClass._id}`, payment)
                .then(res => {
                    console.log("Payment Successful");


                    if (res.data.insertResult.insertedId) {
                        axios.patch(`https://summer-camp-school-server-psi.vercel.app/addClass/${selectedClass._id}`)
                            .then(res => {
                                console.log(res.data); // Updated class data from the server
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    }

                })
                .catch(error => {
                    console.error(error);
                });
        }

    }


    return (
        <>
            <form className="w-[70%] mx-auto " onSubmit={handleSubmit}>
                <div className="flex gap-10 justify-between p-10 ">

                    <h2 className="text-3xl font-bold">Payment</h2>
                    <h2 className="text-2xl font-semibold">Price: {price}$</h2>
                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div className="text-center">
                    <button className="btn btn-outline btn-success  mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                        {processing ? 'Processing...' : 'Pay'}
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 ml-8 text-center">{cardError}</p>}
            {transactionId && <p className="text-green-500 ml-10">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;