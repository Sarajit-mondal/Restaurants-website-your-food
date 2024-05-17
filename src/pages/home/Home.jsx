import BannerSlider from "../../components/shareComponents/home/BannerSlider";
import ContactUs from "../../components/shareComponents/home/section/ContactUs";
import OrderOnline from "../../components/shareComponents/home/section/OrderOnline";
import OurMenu from "../../components/shareComponents/home/section/OurMenu";
import YourFoodCard from "../../components/shareComponents/home/section/YourFoodCard";

function Home() {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <OrderOnline></OrderOnline>
      <YourFoodCard></YourFoodCard>
      <OurMenu></OurMenu>
      <ContactUs></ContactUs>
    </div>
  );
}

export default Home;
