import salad from "../../../../assets/menu/salad-bg.jpg";
import Title from "../../../title/Title";

function ChefRecommends() {
  return (
    <div>
      <Title heading="CHEF RECOMMENDS" subheading="---Should Try---"></Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* card one  */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img src={salad} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn border-0 border-b-2 border-gold-600 text-gold-500">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        {/* card two  */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img src={salad} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn border-0 border-b-2 border-gold-600 text-gold-500">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        {/* card there  */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img src={salad} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn border-0 border-b-2 border-gold-600 text-gold-500">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefRecommends;
