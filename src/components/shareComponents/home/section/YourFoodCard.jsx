import service from "../../../../assets/home/chef-service.jpg";
function YourFoodCard() {
  return (
    <div>
      <div className="relative">
        <img src={service} alt="" className="h-[570px]" />
        <div className="absolute bg-white w-3/4 h-2/4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col px-20 text-center space-y-5 items-center justify-center ">
          <h2 className="text-5xl">Bistro Boss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default YourFoodCard;
