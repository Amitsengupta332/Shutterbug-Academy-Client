import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const SelectClass = () => {
    // const { user, loading, setSelectClass } = useAuth();
    const [selectedClasses, refetch] = useSelectedClasses();
    const [axiosSecure] = useAxiosSecure();

    // const handleDelete = selectClass =>{

    // }

    const handleDelete = selectedClass => {
        axiosSecure.delete(`/selectedClasses/${selectedClass._id}`)
            .then(res => {
                console.log('deleted res', res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    console.log('Your Class has been deleted.');
                }
            })
    }




    return (
        <div className='pt-24 py-4' >
            <h2 className="text-3xl font-semibold my-4 text-center">Selected Class Here</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses?.map((selectedClass, index) => (
                                <tr key={selectedClass._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" w-24 h-24 rounded">
                                                    <img src={selectClass?.photo} alt="Avatar " />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{selectedClass.name}</td>
                                    <td>{selectedClass.price}</td>
                                    <td>
                                        <Link to={`/payment?id=${selectedClass._id}`}><button className="btn btn-success btn-sm">Buy</button></Link>

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(selectedClass)} className="btn btn-error btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        {/*  */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectClass;