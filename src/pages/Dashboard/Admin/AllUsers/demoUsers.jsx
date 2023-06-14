import { useQuery } from "react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], () => {
        return fetch('https://summer-camp-school-server-psi.vercel.app/users')
            .then(res => res.json());
    });

    const handleMakeInstructor = (user) => {
        fetch(`https://summer-camp-school-server-psi.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                }
            })
    };

    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-school-server-psi.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                }
            })
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
                                    {user.role === 'instructor' ? (
                                        'Instructor'
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleMakeInstructor(user)}
                                                className="btn btn-ghost bg-orange-600 text-white"
                                            >
                                                Make Instructor
                                            </button>
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-ghost bg-orange-600 text-white"
                                            >
                                                Make Admin
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;


{/* <td>
                                    {user.role === 'instructor' ? (
                                        'Instructor'
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleMakeInstructor(user)}
                                                className="btn btn-outline btn-success btn-xs text-white"
                                            >
                                                Make Instructor
                                            </button>
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-outline btn-success btn-xs text-white"
                                            >
                                                Make Admin
                                            </button>
                                        </>
                                    )}
                                </td> */}




import { useQuery } from "react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], () => {
        return fetch('https://summer-camp-school-server-psi.vercel.app/users')
            .then(res => res.json());
    });

    const handleMakeInstructor = (user) => {
        fetch(`https://summer-camp-school-server-psi.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                }
            })
    };

    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-school-server-psi.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                }
            })
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
                                            className="btn btn-outline btn-success btn-sm text-white"
                                        // disabled={isButtonDisabled(user._id)}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'instructor' ? (
                                        'instructor'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className="btn btn-outline btn-info btn-sm text-white"
                                        // disabled={isButtonDisabled(user._id)}
                                        >
                                            Make Instructor
                                        </button>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;

