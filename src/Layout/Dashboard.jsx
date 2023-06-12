import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className='pt-24 py-4'>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
                        {/* Sidebar content here */}

                        {isAdmin && (
                            <>
                                <li><Link to='/manageUser'>Manage Class</Link></li>
                                <li><Link to='/allUsers'>Manage Users</Link></li>
                            </>
                        )}

                        {isInstructor && (
                            <>
                                <li><Link to='/AddClass'>Add A Class</Link></li>
                                <li><Link to='/myClass'>My Class</Link></li>
                            </>
                        )}

                        {!isAdmin && !isInstructor && (
                            <>
                                <li><Link to='/selectedClass'>Selected Class</Link></li>
                                <li><Link to='/enrollClass'>Enroll Class</Link></li>
                            </>
                        )}

                        {/* {
                            isAdmin ?
                                <>
                                    <li><Link to='/'>Admin home</Link></li>
                                    <li><Link to='/allUsers'>Manage Users</Link></li>
                                </>
                                :
                                <>
                                </>
                        } */}
                        {/* <li><a>Sidebar Item 2</a></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;