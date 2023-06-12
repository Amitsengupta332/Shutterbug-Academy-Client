import { useQuery } from "react-query"

const usePopularClass = () => {
    const { data: addClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['addClass'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addClass');
            const data = await res.json();

            const sortedClasses = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);

            return sortedClasses;
        }
    });
    return [addClass, loading, refetch];
}

export default usePopularClass;