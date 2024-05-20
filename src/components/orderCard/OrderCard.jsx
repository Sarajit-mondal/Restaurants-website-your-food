function OrderCard({ item }) {
  const { category, image, price, recipe } = item || {};
  return (
    <div>
      <div className="card w-auto min-h-[500px] bg-base-100 shadow-xl">
        <div className="relative">
          <figure>
            <img src={image} alt="Shoes" className="w-full" />
          </figure>
          <p className="absolute top-10 right-10">{price}</p>
        </div>
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold">{category}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              className={`btn border-0 border-b-2 border-gold-600 text-gold-500`}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
