import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const SelectClass = () => {
  const { user, loading, setSelectClass } = useAuth();
  const [selectedClasses, refetch] = useSelectedClasses()
  console.log(selectedClasses);
  const [axiosSecure] = useAxiosSecure();

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
                <th>Img</th>
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
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classItem?.photo} alt="Avatar " />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classItem.name}</td>
                  <td>{selectClass.price}</td>
                  <td>
                    <Link to={`/payment?id=${selectClass._id}`}><button className="btn btn-success btn-sm">Buy</button></Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(selectClass)} className="btn btn-error btn-sm">Delete</button>
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