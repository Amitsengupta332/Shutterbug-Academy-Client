import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddaClass = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const { email, iName, name, photo, price, seats } = data;
        const newItem = { name, price, iName, email, seats, photo }
        console.log(newItem);

        // axiosSecure.post('/addClass', data)
        // .then(data => {
        //     console.log('after posting new menu item', data.data)

        //     if (data.data.insertedId) {
        //         reset()

        //     }
        // })
        axiosSecure
            .post('/addClass', newItem)
            .then((response) => {
                console.log('after posting new menu item', response.data);

                if (response.data.insertedId) {
                    reset();
                }
            })
            .catch((error) => {
                console.error('Error adding class:', error);
            });
    }


    return (
        <div className='pt-24 py-4'>
            <h2 className="text-3xl text-center mb-5 font-extrabold">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)} >

                {/* class name and class image */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text text-center">Class Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Class Image"
                            {...register("photo", { required: true })}
                            className="input input-bordered w-full"
                        />

                        {/* <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("photo", { required: true })} className="file-input file-input-bordered w-full " /> */}
                    </div>
                </div>
                {/* Instructor image and Price */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Instructor Name"
                            value={user?.displayName}
                            {...register("iName", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text text-center">Instructor Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Instructor Email"
                            value={user?.email}
                            {...register("email", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                {/* seat and price */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" placeholder="Available Seats"
                            {...register("seats", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text text-center">Price</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <input className="btn btn-success   mt-4" type="submit" value="Add a Class" />
                </div>

                {/* <input className="btn btn-sm mt-4" type="submit" value="Add Item" /> */}
            </form>
        </div>
    );
};

export default AddaClass;