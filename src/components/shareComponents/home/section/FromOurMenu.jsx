import bgImage from "../../../../assets/home/featured.jpg";
import Title from "../../../title/Title";
function FromOurMenu() {
  return (
    <div className="bgImageMenu bg-fixed bg-center bg-cover ">
      <div className="py-20 text-white">
        <Title subheading="---Check it out---" heading="FROM OUR MENU"></Title>
        {/* menu item */}
        <div className="flex flex-col md:flex-row items-center gap-16 p-20">
          <img src={bgImage} alt="" className=" w-3-4 md:w-2/4" />
          {/* contain */}
          <div>
            <p>
              March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <button className="btn border-0 border-b-4 border-white bg-transparent mt-5">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromOurMenu;
