import React from 'react';
import usePopularClass from '../../../../hooks/usePopularClass';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const [addClass, loading, refetch] = usePopularClass();
    const [axiosSecure] = useAxiosSecure();

    const handleApproveClass = async (id) => {
        try {
            const response = await axiosSecure.post(`/addClass/approve/${id}`);
            console.log(response)
            if (response.data.success) {
                refetch(); // Refresh the class list
            }
        } catch (error) {
            console.error('Failed to approve class:', error);
        }
    };

    const handleDenyClass = async (id) => {
        try {
            const response = await axiosSecure.post(`addClass/deny/${id}`);
            if (response.data.success) {
                refetch(); // Refresh the class list
            }
        } catch (error) {
            console.error('Failed to deny class:', error);
        }
    };


    return (
        <div className='pt-24 py-4'>
            <h2 className="text-3xl font-semibold my-4 text-center">Manage Class</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addClass.map((addItem, index) => (

                            <tr key={addItem._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={addItem?.imgURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{addItem?.className}</td>
                                <td>{addItem?.instructorName}</td>
                                <td>{addItem?.instructorEmail}</td>
                                <td>{addItem?.availableSeats}</td>
                                <td>{addItem?.price}</td>
                                <td>
                                    {addItem?.status === 'pending' && (
                                        <button className='btn btn-xs bg-yellow-200'>Pending</button>
                                    )}
                                    {addItem?.status === 'approved' && (
                                        <button className='btn btn-xs bg-green-300' >Approved</button>
                                    )}
                                    {addItem?.status === 'denied' && (
                                        <button className='btn btn-xs bg-red-300' >Denied</button>
                                    )}
                                </td>
                                <td>
                                    {addItem?.status === 'pending' && (
                                        // onClick={() => handleApprove(addItem._id)}
                                        <button
                                            className='btn btn-xs bg-green-300'
                                            onClick={() => handleApproveClass(addItem?._id)}
                                        >Approve</button>
                                    )}
                                </td>
                                <td>
                                    {/* onClick={() => handleDeny(addItem._id)} */}
                                    {addItem?.status === 'pending' && (
                                        <button
                                            onClick={() => handleDenyClass(addItem?._id)}
                                            className='btn btn-xs bg-red-300'>Deny</button>
                                    )}
                                </td>
                                <td>
                                    <button className="btn btn-info btn-xs">FeedBack</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;