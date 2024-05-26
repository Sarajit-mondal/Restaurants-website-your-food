import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "./useAxiosSequre";
function useCart() {
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
  const query = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosSequre.get(`/cart/${user?.email}`);
      return data;
    },
  });
  return query;
}

export default useCart;
