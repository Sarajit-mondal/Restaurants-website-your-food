import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";

function MyCarts() {
  const { user } = useAuth();
  //   const { data: myCart = [], refetch } = useCart();
  //   refetch();
  const axiosCommon = useAxiosCommon();
  const { data, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/cart/${user?.email}`);
      return data;
    },
  });
  console[(myCart, setMyCart)] = useState([data]);

  console.log(myCart);
  const totalPrice = myCart.reduce((total, item) => total + item.price, 0);

  //delete cart
  const handleCartDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "you want to delete!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosCommon.delete(`/cart/${id}`);
          refetch();
          Swal.fire({
            title: "Deleted!",
            position: "center",
            text: "Your Cart has been deleted.",
            icon: "success",
            timer: 1500,
          });
        }
      });
    } catch (error) {
      alert.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-4xl ">TOTAL ORDERS : {myCart.length}</h1>
        <h1 className="text-4xl ">TOTAL PRICE : {totalPrice}</h1>
        <button className="btn bg-gold-500">Pay</button>
      </div>
      {/* table here */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gold-500 ">
            <tr className="[&>th]:text-white [&>th]:p-5 ">
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCart.map((item, inx) => (
              <tr key={inx}>
                <th>
                  <label>{inx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={item.image} alt="image" className="size-20" />
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleCartDelete(item._id)}
                    className="btn bg-[#B91C1C] text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}

export default MyCarts;
