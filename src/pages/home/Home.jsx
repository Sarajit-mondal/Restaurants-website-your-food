import BannerSlider from "../../components/shareComponents/home/BannerSlider";
import ChefRecommends from "../../components/shareComponents/home/section/ChefRecommends";
import ContactUs from "../../components/shareComponents/home/section/ContactUs";
import FromOurMenu from "../../components/shareComponents/home/section/FromOurMenu";
import OrderOnline from "../../components/shareComponents/home/section/OrderOnline";
import OurMenu from "../../components/shareComponents/home/section/OurMenu";
import TextiMonials from "../../components/shareComponents/home/section/TextiMonials";
import YourFoodCard from "../../components/shareComponents/home/section/YourFoodCard";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <OrderOnline></OrderOnline>
      <YourFoodCard></YourFoodCard>
      <OurMenu></OurMenu>
      <ContactUs></ContactUs>
      <ChefRecommends></ChefRecommends>
      <FromOurMenu></FromOurMenu>
      <TextiMonials></TextiMonials>
    </div>
  );
}

export default Home;
