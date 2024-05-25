/* eslint-disable no-unused-vars */

import { useMutation } from "@tanstack/react-query";
import useAxiosSequre from "../../hooks/useAxiosSequre";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
function OrderCard({ item }) {
  const { category, image, price, recipe } = item || {};
  const { user } = useAuth();
  const axiossequre = useAxiosSequre();
  // Mutations
  const { mutateAsync } = useMutation({
    mutationFn: async (item) => {
      const { data } = await axiossequre.post(`/cart/:${user.email}`);
      return data;
    },
    onSuccess: () => {
      console.log("yess post success");
    },
  });

  const handleAddToCart = async (item) => {
    try {
      // await mutateAsync(item);
      toast.success("Successfully created!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="card w-auto min-h-[500px] bg-base-100 shadow-xl">
        <div className="relative">
          <figure>
            <img src={image} alt="Shoes" className="w-full" />
          </figure>
          <p className="absolute top-10 right-10 badge badge-secondary">
            {price}
          </p>
        </div>
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold">{category}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className={`btn border-0 border-b-2 border-gold-600 text-gold-500`}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
