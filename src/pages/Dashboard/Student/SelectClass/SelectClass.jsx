import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrashAlt, FaMoneyBillAlt } from "react-icons/fa";

const SelectClass = () => {
  const { user, loading  } = useAuth();
  const [selectedClasses, refetch] = useSelectedClasses()
  console.log(selectedClasses);
  console.log(selectedClasses);
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = classItem => {
    // axiosSecure.delete(`/api/selectclass/${selectClass.id}`)
    axiosSecure.delete(`/selectedClasses/${classItem._id}`)
      .then(res => {
        console.log('deleted res', res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          console.log('Class deleted successfully.');
        }
      })
      .catch(error => {
        console.error('Error occurred while deleting the class:', error);
        console.log('Failed to delete the class. Please try again.');
      });
  }

  return (
    <>
      <div className='pt-24 py-4'>
        <h2 className='text-3xl font-semibold my-4 text-center'>Selected Class Here</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((classItem, index) => (
                <tr key={index}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-24 h-24 rounded">
                          <img src={classItem?.photo} alt="Avatar " />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classItem.name}</td>
                  <td>${classItem.price}</td>

                  <td>
                    <Link to={`/payment?id=${classItem._id}`}><button className="btn btn-outline btn-success "><FaShoppingCart></FaShoppingCart></button></Link>
                    {/* <FaShoppingCart></FaShoppingCart> */}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(classItem)} className="btn btn-outline btn-error"><FaTrashAlt></FaTrashAlt></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SelectClass;