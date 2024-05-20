import orderImage from "../../../assets/dashboard/order.png";
import PageBanner from "../../../components/pagebanner/PageBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

import OrderCard from "../../../components/orderCard/OrderCard";

function OurShop() {
  const allMenu = useMenu();

  // get menu data

  //today offer
  const drinks =
    allMenu && allMenu.filter((offer) => offer.category === "drinks");

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

  const orders = ["salad", "pizza", "soup", "dessert", "drinks"];
  const handleSelected = (index) => {
    console.log(orders[index]);
  };
  return (
    <div>
      <PageBanner
        image={orderImage}
        heading="Our Order"
        subHeading="Would you like to try a dish"
      ></PageBanner>
      {/* Tabs */}
      <div className=" flex justify-center my-10">
        <Tabs onSelect={handleSelected}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid gap-10  grid-cols-1 md:grid-cols-3 ">
              {salads &&
                salads.map((item) => (
                  <OrderCard key={item._id} item={item}></OrderCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-10  grid-cols-1 md:grid-cols-3 ">
              {pizzas &&
                pizzas.map((item) => (
                  <OrderCard key={item._id} item={item}></OrderCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-10  grid-cols-1 md:grid-cols-3 ">
              {soups &&
                soups.map((item) => (
                  <OrderCard key={item._id} item={item}></OrderCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-10  grid-cols-1 md:grid-cols-3 ">
              {desserts &&
                desserts.map((item) => (
                  <OrderCard key={item._id} item={item}></OrderCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-10  grid-cols-1 md:grid-cols-3 ">
              {drinks &&
                drinks.map((item) => (
                  <OrderCard key={item._id} item={item}></OrderCard>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default OurShop;
