import Title from "../../../title/Title";
import Menu from "../../../menu/Menu";
import useMenu from "../../../../hooks/useMenu";

function OurMenu() {
  const popular = useMenu();
  const popularMenu =
    popular && popular.filter((menu) => menu.category === "popular");

  return (
    <div className="my-10">
      <Title heading={"FORM OUR MENU"} subheading={"Check it Out"}></Title>
      {/* our menu */}
      <div className="grid grid-cols-2 gap-8">
        {popularMenu &&
          popularMenu.map((menu) => (
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
