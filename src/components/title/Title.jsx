// eslint-disable-next-line react/prop-types
function Title({ heading, subheading }) {
  return (
    <div className="text-center my-10 space-y-3">
      <h3 className="text-yellow-color">{subheading}</h3>
      <hr className="h-1 border-none bg-light-gray w-96 mx-auto" />
      <h2 className="text-4xl">{heading}</h2>
      <hr className="h-1 border-none bg-light-gray w-96 mx-auto" />
    </div>
  );
}

export default Title;
