import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // console.log(result);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('https://summer-camp-school-server-psi.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;