import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        // return fetch('http://localhost:5000/users')
        // .then(res => res.json());
        return res.data;
    });

    // const makeAdmin = async (user) => {
    // try {
    //     const response = await axiosSecure.patch(/users/${user._id}/admin);
    //     if (response.data.success) {
    //         refetch();
    //     }
    // } catch (error) {
    //     console.error('Error making admin:', error);
    // }
    // };

    // const makeInstructor = async (user) => {
    //     try {
    //         const response = await axiosSecure.patch(/users/${user._id}/instructor);
    //         if (response.data.success) {
    //             refetch();
    //         }
    //     } catch (error) {
    //         console.error('Error making instructor:', error);
    //     }
    // };

    const handleMakeInstructor = async (user) => {
        try {
            const response = await axiosSecure.patch(`/users/instructor/${user._id}`);
            console.log(response);
            if (response) {
                refetch();
            }
        } catch (error) {
            console.error('Error making instructor:', error);
        }


        // fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        //     method: "PATCH",
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount) {
        //             refetch()
        //         }
        //     })
    };





    const handleMakeAdmin = async (user) => {

        try {
            const response = await axiosSecure.patch(`/users/admin/${user._id}`);
            if (response) {
                refetch();
            }
        } catch (error) {
            console.error('Error making admin:', error);
        }


        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //     method: "PATCH",
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount) {
        //             refetch()
        //         }
        //     })
    }

    return (
        <div className='pt-24 py-4'>
            <h3 className="text-3xl font-semibold my-4 text-center">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user.role === 'admin' ? (
                                        'admin'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-outline btn-success btn-xs text-white"
                                            disabled={user.role === 'instructor'}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>

                                {/* <td>
                                    {user.role === 'admin' ? (
                                        'admin'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-outline btn-success btn-xs text-white"

                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td> */}

                                <td>
                                    {user.role === 'instructor' ? (
                                        'instructor'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className="btn btn-outline btn-info btn-xs text-white"
                                            disabled={user.role === 'admin'}
                                        >
                                            Make Instructor
                                        </button>
                                    )}
                                </td>


                                {/* <td>
                                    {user.role === 'instructor' ? (
                                        'instructor'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className="btn btn-outline btn-info btn-xs text-white"

                                        >
                                            Make Instructor
                                        </button>
                                    )}
                                </td> */}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
