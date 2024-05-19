import menuBanner from "../../../assets/menu/banner3.jpg";
import Desertsbanner from "../../../assets/menu/Rectangle 9.png";

import Menu from "../../../components/menu/Menu";
import MenuButton from "../../../components/menubutton/MenuButton";
import PageBanner from "../../../components/pagebanner/PageBanner";
import Title from "../../../components/title/Title";
import useMenu from "../../../hooks/useMenu";
function MenuPage() {
  const allMenu = useMenu();

  //today offer
  const todayOffer =
    allMenu && allMenu.filter((offer) => offer.category === "offered");

  // desserts
  const desserts =
    allMenu && allMenu.filter((offer) => offer.category === "dessert");
  // pizza
  const pizzas =
    allMenu && allMenu.filter((offer) => offer.category === "pizza");
  // salad
  const salads =
    allMenu && allMenu.filter((offer) => offer.category === "salad");
  // soup
  const soups = allMenu && allMenu.filter((offer) => offer.category === "soup");

  return (
    <div>
      {/* todayOfferbanner    */}
      <div>
        <PageBanner
          image={menuBanner}
          heading="OUR MENU"
          subHeading="would you to try A Dish"
        ></PageBanner>
        {/* todayOffer OfferMenu */}
        <div className="my-16">
          <Title heading="TODAY'S OFFER" subheading="---Don't miss---"></Title>
          <div className="grid grid-cols-2 gap-10">
            {todayOffer &&
              todayOffer.map((offer) => (
                <Menu key={offer._id} menu={offer}></Menu>
              ))}
          </div>
          <MenuButton btnText="ORDER YOUR FAVOURITE FOOD"></MenuButton>
        </div>
      </div>
      {/* todayOffer OfferMenu */}

      {/* Dessertsbanner    */}
      <div>
        <PageBanner
          image={Desertsbanner}
          heading="DESSERTS"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></PageBanner>
        {/* todayOffer OfferMenu */}
        <div className="my-16">
          <div className="grid grid-cols-2 gap-10">
            {desserts &&
              desserts.map((offer) => (
                <Menu key={offer._id} menu={offer}></Menu>
              ))}
          </div>
          <MenuButton btnText="ORDER YOUR FAVOURITE FOOD"></MenuButton>
        </div>
      </div>
      {/*  DessertsMenu */}
      {/* Pizza    */}
      <div>
        <PageBanner
          image={Desertsbanner}
          heading="PIZZA"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></PageBanner>
        {/* todayOffer OfferMenu */}
        <div className="my-16">
          <div className="grid grid-cols-2 gap-10">
            {pizzas &&
              pizzas.map((offer) => <Menu key={offer._id} menu={offer}></Menu>)}
          </div>
          <MenuButton btnText="ORDER YOUR FAVOURITE FOOD"></MenuButton>
        </div>
      </div>
      {/*  Pizza */}
      {/* Salad    */}
      <div>
        <PageBanner
          image={Desertsbanner}
          heading="SALADS"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></PageBanner>
        {/* todayOffer OfferMenu */}
        <div className="my-16">
          <div className="grid grid-cols-2 gap-10">
            {salads &&
              salads.map((offer) => <Menu key={offer._id} menu={offer}></Menu>)}
          </div>
          <MenuButton btnText="ORDER YOUR FAVOURITE FOOD"></MenuButton>
        </div>
      </div>
      {/*  Salad */}
      {/* Soup    */}
      <div>
        <PageBanner
          image={Desertsbanner}
          heading="SOUPS"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></PageBanner>
        {/* todayOffer OfferMenu */}
        <div className="my-16">
          <div className="grid grid-cols-2 gap-10">
            {soups &&
              soups.map((offer) => <Menu key={offer._id} menu={offer}></Menu>)}
          </div>
          <MenuButton btnText="ORDER YOUR FAVOURITE FOOD"></MenuButton>
        </div>
      </div>
      {/*  Soup */}
    </div>
  );
}

export default MenuPage;