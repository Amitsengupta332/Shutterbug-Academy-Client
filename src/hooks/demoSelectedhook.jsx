import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useSelectedClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            // console.log(res);
            return res.data.data;
        }
    })


    console.log('User:', user?.email);
    console.log('Loading:', loading);
    console.log('Selected Classes:', selectedClasses);
    return [selectedClasses, refetch]

}

export default useSelectedClasses;