import { useEffect, useState } from "react";
import useMenuData from "../../../../hooks/useMenuData";
import Title from "../../../title/Title";
import axios from "axios";
import Menu from "../../../menu/Menu";

function OurMenu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const popularMenu = res.data.filter(
        (menu) => menu.category === "popular"
      );
      setMenus(popularMenu);
    });
  }, []);

  return (
    <div className="my-10">
      <Title heading={"FORM OUR MENU"} subheading={"Check it Out"}></Title>
      {/* our menu */}
      <div className="grid grid-cols-2 gap-8">
        {menus.map((menu) => (
          <Menu key={menu._id} popularmenu={menu}></Menu>
        ))}
      </div>

      <button className="btn border-b-4 border-b-neutral-500 block mx-auto mt-10 hover:bg-neutral-500">
        VIEW FULL Menu
      </button>
    </div>
  );
}

export default OurMenu;
