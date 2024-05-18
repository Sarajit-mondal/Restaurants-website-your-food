/* eslint-disable react/prop-types */
function PageBanner({ image, heading, subHeading }) {
  return (
    <div className="relative ">
      <img src={image} />
      <div className="text-white p-20 w-3/4 absolute top-2/4  left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#00000066] text-center">
        <h2 className="text-6xl mb-5 font-bold">{heading}</h2>
        <p>{subHeading}</p>
      </div>
    </div>
  );
}

export default PageBanner;
