/* eslint-disable no-unused-vars */

import { useMutation } from "@tanstack/react-query";
import useAxiosSequre from "../../hooks/useAxiosSequre";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../../hooks/useCart";

/* eslint-disable react/prop-types */
function OrderCard({ item }) {
  const { _id, category, image, price, recipe } = item || {};
  const { user } = useAuth();
  const axiossequre = useAxiosSequre();
  const navigate = useNavigate();
  const location = useLocation();
  const { refetch } = useCart();
  // Mutations
  const { mutateAsync } = useMutation({
    mutationFn: async (cardItem) => {
      const { data } = await axiossequre.post(
        `http://localhost:8000/cart`,
        cardItem
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: category + "  added successful",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const handleAddToCart = async (item) => {
    try {
      if (user && user?.email) {
        const cardItem = {
          menuId: _id,
          email: user?.email,
          category,
          image,
          price,
          recipe,
        };
        console.log(cardItem);

        await mutateAsync(cardItem);
      } else {
        Swal.fire({
          title: "Are you sure?",
          text: "want to Log In",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/logIn", { state: location.pathname });
          }
        });
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
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
