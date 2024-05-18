import Title from "../../../title/Title";
import Menu from "../../../menu/Menu";
import useMenu from "../../../../hooks/useMenu";
import MenuButton from "../../../menubutton/MenuButton";

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
          popularMenu.map((menu) => <Menu key={menu._id} menu={menu}></Menu>)}
      </div>

      <MenuButton btnText="VIEW FULL Menu"></MenuButton>
    </div>
  );
}

export default OurMenu;
