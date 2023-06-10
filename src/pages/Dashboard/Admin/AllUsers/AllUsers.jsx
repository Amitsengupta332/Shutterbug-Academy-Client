import { useQuery } from "react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    });
    return (
        <div className='pt-24 py-4'>
            <h3 className="text-3xl font-semibold my-4 text-center">Total Users:  {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>  
                            <th>Role</th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                 
                                <td>Blue</td>
                                 
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;