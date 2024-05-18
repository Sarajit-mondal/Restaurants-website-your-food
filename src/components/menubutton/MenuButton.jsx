/* eslint-disable react/prop-types */
function MenuButton({ btnText }) {
  return (
    <button className="btn border-b-4 border-b-neutral-500 block mx-auto mt-10 hover:bg-neutral-500">
      {btnText}
    </button>
  );
}

export default MenuButton;
