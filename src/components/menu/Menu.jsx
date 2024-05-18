/* eslint-disable react/prop-types */
function Menu({ menu }) {
  return (
    <div>
      {/* menu one */}
      <div className="flex items-center gap-6 text-light-gray">
        <img
          src={menu.image}
          className="w-28 rounded-full rounded-tl-none "
          alt=""
        />
        <div>
          <h3>{menu.name}............</h3>
          <p>{menu.recipe}</p>
        </div>
        <span className="text-gold-500">$14.5</span>
      </div>
    </div>
  );
}

export default Menu;
