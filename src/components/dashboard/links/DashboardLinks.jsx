import { NavLink } from "react-router-dom";
import { FaHome, FaAd, FaShoppingCart, FaUsers, FaBars } from "react-icons/fa";
function DashboardLinks() {
  return (
    <div className="[&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>.active]:text-white space-y-5 font-bold">
      <NavLink to="dashboard/Home">
        <FaHome />
        ADMIN Home
      </NavLink>
      <NavLink to="dashboard/items">
        <FaAd />
        ADD ITEMS
      </NavLink>
      <NavLink to="dashboard/myCart">
        <FaShoppingCart />
        MY CARTS
      </NavLink>
      <NavLink to="dashboard/manageItems">
        <FaBars />
        MANAGE ITEMS
      </NavLink>
      <NavLink to="dashboard/Home">
        <FaUsers />
        ALL USERS
      </NavLink>
      <div className="divider"></div>
      <NavLink to="/">
        <FaHome />
        Home
      </NavLink>
    </div>
  );
}

export default DashboardLinks;
